import { useCallback } from 'react'
import { useRouter } from 'next/router'

import { clearSession } from '../../utils/session-store'

const LogoutButton = () => {
  const router = useRouter()

  const handleClick = useCallback(() => {
    clearSession()
    router.reload()
  }, [router])

  return <button onClick={handleClick}>Logout</button>
}

export { LogoutButton }
