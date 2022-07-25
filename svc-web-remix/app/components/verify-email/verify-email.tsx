import { Card, Form, PrimaryButton } from '../retro-ui'

import type { GetEmailVerifiedQuery } from '~/graphql/generated'

type Props = {
  email: string
  query: GetEmailVerifiedQuery
}

const VerifyEmail = (props: Props) => {
  const { email, query } = props

  const emailVerified = query.kc_user[0]?.email_verified ?? false

  if (!emailVerified) {
    return (
      <Card>
        Please verify that you own the email address "{email}".
        <Form name="VerifyEmail" method="post" action="/account/verify-email">
          <Form.Item>
            <PrimaryButton>
              Resend Verification Email
            </PrimaryButton>
          </Form.Item>
        </Form>
      </Card>
    )
  }

  return null
}

export { VerifyEmail }
