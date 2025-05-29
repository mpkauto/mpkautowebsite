import { useEffect, useState } from 'react'
import { Profile, getProfiles, createProfile, updateProfile, deleteProfile } from '@/services/supabaseService'

export function ProfileManager() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch profiles on component mount
  useEffect(() => {
    loadProfiles()
  }, [])

  async function loadProfiles() {
    try {
      setLoading(true)
      const { data, error } = await getProfiles()
      if (error) throw error
      setProfiles(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load profiles')
    } finally {
      setLoading(false)
    }
  }

  async function handleCreateProfile() {
    try {
      const newProfile = {
        id: crypto.randomUUID(),
        username: `user_${Math.random().toString(36).slice(2, 7)}`
      }
      const { error } = await createProfile(newProfile)
      if (error) throw error
      await loadProfiles() // Reload the list
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create profile')
    }
  }

  async function handleUpdateProfile(id: string) {
    try {
      const updates = {
        username: `updated_${Math.random().toString(36).slice(2, 7)}`
      }
      const { error } = await updateProfile(id, updates)
      if (error) throw error
      await loadProfiles() // Reload the list
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update profile')
    }
  }

  async function handleDeleteProfile(id: string) {
    try {
      const { error } = await deleteProfile(id)
      if (error) throw error
      await loadProfiles() // Reload the list
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete profile')
    }
  }

  if (loading) return <div>Loading profiles...</div>
  if (error) return <div className="text-red-500">Error: {error}</div>

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Profile Manager</h2>
      
      <button
        onClick={handleCreateProfile}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Create New Profile
      </button>

      <div className="space-y-2">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="p-4 border rounded flex items-center justify-between"
          >
            <span>{profile.username}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleUpdateProfile(profile.id)}
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Update
              </button>
              <button
                onClick={() => handleDeleteProfile(profile.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 