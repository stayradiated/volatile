import { Link } from '@remix-run/react'

import { Page } from '~/components/ui'

const Settings = () => {
  return (
    <Page title="Settings">
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
    </Page>
  )
}

export default Settings
