import { clearSession } from '../../utils/session-store'

const LogoutButton = () => {
  const handleClick = () => {
    clearSession()
  }

  return <button onClick={handleClick}>Logout</button>
}

export { LogoutButton }
