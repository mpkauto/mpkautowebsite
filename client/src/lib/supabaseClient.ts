import { createClient } from '@supabase/supabase-js'
import type { Database as DatabaseTypes } from './database.types'

/**
 * Supabase client configuration
 * @constant {string} supabaseUrl - The URL of your Supabase project
 * @constant {string} supabaseAnonKey - The anonymous key for your Supabase project
 */
const supabaseUrl = 'https://vjeeycdzwojildoiwwhh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqZWV5Y2R6d29qaWxkb2l3d2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MzYyMzgsImV4cCI6MjA2NDAxMjIzOH0.eZZ_im438VIjgsE62Z8JDzB0JsjklSsRr_6_enhZD8c'

/**
 * Creates a Supabase client instance with proper typing
 */
export const supabase = createClient<DatabaseTypes>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
})

/**
 * Type definitions for your database schema
 * Add your table types here as you create them
 */
export type Database = {
  public: {
    Tables: {
      // Example table type:
      // users: {
      //   Row: {
      //     id: string
      //     created_at: string
      //     name: string
      //   }
      //   Insert: {
      //     id?: string
      //     created_at?: string
      //     name: string
      //   }
      //   Update: {
      //     id?: string
      //     created_at?: string
      //     name?: string
      //   }
      // }
    }
  }
}

/**
 * Helper function to test Supabase connection
 * @returns {Promise<boolean>} True if connection is successful, false otherwise
 */
export async function testConnection(): Promise<boolean> {
  try {
    const { data, error } = await supabase.from('_test').select('*').limit(1)
    if (error) throw error
    console.log('✅ Supabase connection successful!')
    return true
  } catch (error) {
    console.error('❌ Supabase connection error:', error)
    return false
  }
}

/**
 * Helper function to handle Supabase errors
 */
export function handleSupabaseError(error: any): Error {
  if (error instanceof Error) return error
  return new Error(error?.message || 'An unknown error occurred')
}

/**
 * Helper function to check if a user has access to a resource
 */
export function checkUserAccess(userId: string, resourceUserId: string): boolean {
  return userId === resourceUserId
} 