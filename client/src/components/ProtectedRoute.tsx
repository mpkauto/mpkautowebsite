import { ReactNode } from 'react'
import { useUser } from '@/hooks/useUser'
import { useNavigate } from 'wouter'

interface ProtectedRouteProps {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useUser()
  const [, navigate] = useNavigate()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-accent"></div>
      </div>
    )
  }

  if (!user) {
    navigate('/auth/login')
    return null
  }

  return <>{children}</>
} 