import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export function BookingsList() {
  const [bookings, setBookings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBookings() {
      try {
        const { data, error } = await supabase
          .from('appointments')
          .select(`
            *,
            profiles:user_id(full_name, email, phone),
            services:service_id(name)
          `)
          .order('created_at', { ascending: false })

        if (error) throw error
        setBookings(data || [])
      } catch (err) {
        setError('Failed to fetch bookings')
        console.error('Error fetching bookings:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchBookings()
  }, [])

  if (loading) return <div className="p-4">Loading bookings...</div>
  if (error) return <div className="p-4 text-red-500">{error}</div>

  return (
    <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="p-4 bg-white dark:bg-gray-700 rounded-md shadow">
              <div className="flex justify-between">
                <h3 className="font-medium">{booking.profiles?.full_name || 'Anonymous'}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(booking.appointment_date).toLocaleString()}
                </span>
              </div>
              <p className="text-sm mt-2">Service: {booking.services?.name || 'Unknown'}</p>
              <p className="text-sm mt-1">Status: <span className="capitalize">{booking.status}</span></p>
              {booking.notes && (
                <div className="mt-2 text-sm">
                  <p className="font-medium">Notes:</p>
                  <p className="whitespace-pre-line">{booking.notes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}