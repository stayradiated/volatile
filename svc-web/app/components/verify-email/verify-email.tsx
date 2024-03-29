import { Card, Form, PrimaryButton } from '../retro-ui'

import type { GetEmailVerifiedQuery } from '~/graphql/generated'

type Props = {
  email: string
  query: GetEmailVerifiedQuery
}

const VerifyEmail = (props: Props) => {
  const { email, query } = props

  const emailVerified = query.user[0]?.emailVerified ?? false

  if (!emailVerified) {
    return (
      <Card>
        Please verify that you own the email address "{email}".
        <Form name="VerifyEmail" method="post">
          <Form.Item>
            <PrimaryButton>Resend Verification Email</PrimaryButton>
          </Form.Item>
        </Form>
      </Card>
    )
  }

  return null
}

export { VerifyEmail }
