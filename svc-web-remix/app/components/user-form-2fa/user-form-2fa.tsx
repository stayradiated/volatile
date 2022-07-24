import { Button, Form, Input } from '../retro-ui'

import { ReadableCode } from './readable-code'
import type { GetUser2FaQuery } from '~/graphql/generated'

type Props = {
  query: GetUser2FaQuery
}

const UserForm2FA = (props: Props) => {
  const { query } = props

  const has2FA = Boolean(query.kc_user[0].user_2fa)

  const qrcode = query.setup_user_2fa?.qrcode ?? ''
  const secret = query.setup_user_2fa?.secret ?? ''

  if (has2FA) {
    return (
      <div>
        <h3>Setup 2FA</h3>
        <p>You already have 2FA enabled.</p>

        <Form name="UserForm2FA" method="post" action="/account/2fa">
          <Form.Item name="token" label="Token">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button>Delete 2FA</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }

  return (
    <div>
      <h3>Setup 2FA</h3>

      <img src={qrcode} />
      <ReadableCode value={secret} />

      <Form name="UserForm2FA" method="post" action="/account/2fa">
        <Form.Item name="token" label="Token">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button>Enable 2FA</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export { UserForm2FA }
