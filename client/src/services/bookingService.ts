import { supabase } from '@/lib/supabaseClient';
import type { InsertBooking } from '@shared/schema';

/**
 * Creates a new booking in the Supabase 'bookings' table
 * @param bookingData Booking form data conforming to InsertBooking type
 * @returns Promise containing inserted data or throws error
 */
export const createBooking = async (bookingData: InsertBooking): Promise<any> => {
  try {
    const { data, error } = await supabase
      .from('bookings') // Make sure this matches your actual table name
      .insert({
        name: bookingData.name,
        phone: bookingData.phone,
        email: bookingData.email,
        vehicle_info: bookingData.vehicleInfo,
        service_type: bookingData.serviceType,
        preferred_date: bookingData.preferredDate,
        preferred_time: bookingData.preferredTime,
        notes: bookingData.notes,
        status: 'pending',
        created_at: new Date().toISOString(),
      })
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      throw new Error(error.message || 'Booking failed');
    }

    return data?.[0];
  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error(error instanceof Error ? error.message : 'Unexpected error');
  }
};
