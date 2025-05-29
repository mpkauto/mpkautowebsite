import { useEffect, useState } from 'react'
import { testConnection } from '@/lib/supabaseClient'

export function SupabaseTest() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null)

  useEffect(() => {
    async function checkConnection() {
      const connected = await testConnection()
      setIsConnected(connected)
    }
    checkConnection()
  }, [])

  return (
    <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-2">Supabase Connection Status</h2>
      {isConnected === null ? (
        <p>Testing connection...</p>
      ) : isConnected ? (
        <p className="text-green-500">✅ Connected to Supabase</p>
      ) : (
        <p className="text-red-500">❌ Failed to connect to Supabase</p>
      )}
    </div>
  )
} 