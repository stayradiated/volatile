import { clearSession } from '../../utils/session-store'

const LogoutButton = () => {
  const handleClick = () => {
    clearSession()
    window.location.reload()
  }

  return <button onClick={handleClick}>Logout</button>
}

export { LogoutButton }
