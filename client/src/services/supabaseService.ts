import { supabase } from "@/lib/supabaseClient";
import { InsertBooking } from "@shared/schema";

/**
 * Submits a new booking to the Supabase "bookings" table
 */
export async function createBooking(data: InsertBooking) {
  const { data: result, error } = await supabase
    .from("bookings")
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error("Supabase insert error:", error);
    throw new Error("Booking creation failed");
  }

  return result;
}
