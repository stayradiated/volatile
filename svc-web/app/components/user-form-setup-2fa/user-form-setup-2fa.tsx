import { Alert, PrimaryButton, Form, Input } from '../retro-ui'

import { ReadableCode } from './readable-code'
import type { SetupUser2FaQuery } from '~/graphql/generated'

type Props = {
  query: SetupUser2FaQuery
  error?: string
}

const UserFormSetup2FA = (props: Props) => {
  const { query, error } = props

  const qrcode = query.actionSetupUser2fa?.qrcode ?? ''
  const secret = query.actionSetupUser2fa?.secret ?? ''

  return (
    <div>
      <h3>Setup 2FA</h3>

      {error && <Alert type="error" message={error} />}

      <img src={qrcode} />
      <ReadableCode value={secret} />

      <Form name="UserForm2FA" method="post">
        <Form.Item name="token" label="Token">
          <Input />
        </Form.Item>
        <Form.Item>
          <input type="hidden" name="secret" value={secret} />
          <input type="hidden" name="name" value="Name of your Device" />
          <PrimaryButton>Enable 2FA</PrimaryButton>
        </Form.Item>
      </Form>
    </div>
  )
}

export { UserFormSetup2FA }
