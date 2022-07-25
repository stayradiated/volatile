import { Alert, PrimaryButton, Form, Input } from '../retro-ui'

import { ReadableCode } from './readable-code'
import type { SetupUser2FaQuery } from '~/graphql/generated'

type Props = {
  query: SetupUser2FaQuery
  error?: string
}

const UserFormSetup2FA = (props: Props) => {
  const { query, error } = props

  const qrcode = query.setup_user_2fa?.qrcode ?? ''
  const secret = query.setup_user_2fa?.secret ?? ''

  return (
    <div>
      <h3>Setup 2FA</h3>

      {error && <Alert type="error" message={error} />}

      <img src={qrcode} />
      <ReadableCode value={secret} />

      <Form name="UserForm2FA" method="post" action="/account/2fa/enable">
        <Form.Item name="token" label="Token">
          <Input />
        </Form.Item>
        <Form.Item>
          <input type="hidden" name="secret" value={secret} />
          <PrimaryButton>Enable 2FA</PrimaryButton>
        </Form.Item>
      </Form>
    </div>
  )
}

export { UserFormSetup2FA }
