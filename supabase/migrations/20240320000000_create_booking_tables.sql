-- Create profiles table if not exists
create table if not exists public.profiles (
    id uuid references auth.users on delete cascade not null primary key,
    username text unique,
    email text unique,
    full_name text,
    phone text,
    role text default 'user' check (role in ('user', 'admin')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create services table
create table if not exists public.services (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    description text,
    duration interval not null,
    price decimal(10,2) not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create appointments table
create table if not exists public.appointments (
    id uuid default gen_random_uuid() primary key,
    user_id uuid references public.profiles(id) on delete cascade not null,
    service_id uuid references public.services(id) on delete cascade not null,
    appointment_date timestamp with time zone not null,
    status text check (status in ('pending', 'confirmed', 'cancelled', 'completed')) default 'pending',
    notes text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create function to handle updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
    -- Set a safe search_path
    perform set_config('search_path', 'pg_catalog, public', false);

    new.updated_at = timezone('utc'::text, now());
    return new;
end;
$$ language plpgsql security definer;

-- Create triggers for updated_at
create trigger handle_updated_at
    before update on public.profiles
    for each row
    execute function public.handle_updated_at();

create trigger handle_updated_at
    before update on public.services
    for each row
    execute function public.handle_updated_at();

create trigger handle_updated_at
    before update on public.appointments
    for each row
    execute function public.handle_updated_at();

-- Insert some sample services
insert into public.services (name, description, duration, price)
values 
    ('Basic Service', 'Oil change and basic inspection', '1 hour'::interval, 49.99),
    ('Full Service', 'Complete vehicle service including oil change, filters, and inspection', '2 hours'::interval, 99.99),
    ('Premium Service', 'Full service plus additional checks and maintenance', '3 hours'::interval, 149.99); 