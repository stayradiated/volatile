import type { Session } from './session-store'

const fetchMetadata = async (session: Session, type: string, args: Record<string,string|number>) => {
  if (!session.isAuthenticated) {
    throw new Error('Cannot fetch metadata without an authenticated session!')
  }

  const response = await fetch(`http://localhost:7947/v1/metadata`, {
    method: 'POST',
    headers: {
      'x-hasura-admin-secret': session.adminSecret,
    },
    body: JSON.stringify({ type, args })
  })
  return response.json()
}

export { fetchMetadata }
