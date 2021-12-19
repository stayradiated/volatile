import { clearSession } from '../../utils/session-store'
import { Button } from '../retro-ui'

const LogoutButton = () => {
  const handleClick = () => {
    clearSession()
    window.location.replace('/')
  }

  return (
    <Button type="primary" onClick={handleClick}>
      Logout
    </Button>
  )
}

export { LogoutButton }
