import { Logo } from '../logo'
import { Alert, Card } from '../retro-ui'

const InvalidSecret = () => {
  return (
    <Card>
      <Logo />
      <Alert
        message="Sorry, this URL is either expired or invalid."
        type="error"
      />
    </Card>
  )
}

export { InvalidSecret }
