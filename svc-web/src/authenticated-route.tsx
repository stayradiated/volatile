import { getSession } from './utils/session-store'

type Props = {
  children: React.ReactNode
}

const AuthenticatedRoute = (props: Props) => {
  const { children } = props

  const session = getSession()
  if (session.role === 'user' && session.expiresAt <= new Date()) {
    window.location.replace('/login')

    return <p>You must log in to view this page</p>
  }

  return <>{children}</>
}

export { AuthenticatedRoute }
