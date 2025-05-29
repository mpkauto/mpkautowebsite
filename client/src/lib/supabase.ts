import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = 'https://vjeeycdzwojildoiwwhh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqZWV5Y2R6d29qaWxkb2l3d2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MzYyMzgsImV4cCI6MjA2NDAxMjIzOH0.eZZ_im438VIjgsE62Z8JDzB0JsjklSsRr_6_enhZD8c'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Test function to verify connection
export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from('_test').select('*').limit(1)
    if (error) throw error
    console.log('Supabase connection successful!')
    return true
  } catch (error) {
    console.error('Supabase connection error:', error)
    return false
  }
} 