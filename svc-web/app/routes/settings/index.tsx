import { Link } from '@remix-run/react'

const Settings = () => {
  return (
    <ul>
      <li>
        <Link to="./keys">Keys</Link>
      </li>
      <li>
        <Link to="./account">Account</Link>
      </li>
      <li>
        <Link to="./subscription">Subscription</Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
    </ul>
  )
}

export default Settings
