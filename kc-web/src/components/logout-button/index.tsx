import { clearSession } from '../../utils/session-store'
import { Button } from '../retro-ui'

const LogoutButton = () => {
  const handleClick = () => {
    clearSession()
    window.location.reload()
  }

  return (
    <Button type="primary" onClick={handleClick}>
      Logout
    </Button>
  )
}

export { LogoutButton }
