import { useState } from 'react'
import { useQuery, gql } from '@apollo/client'

import { Card, Spin, Alert, Button } from '../retro-ui'

import { useSendUserEmailVerify } from '../../hooks/mutations/use-send-user-email-verify'

import type {
  VerifyEmailQuery as Query,
  VerifyEmailQueryVariables as QueryVariables,
} from '../../utils/graphql'

const QUERY = gql`
  query verifyEmail {
    kc_user {
      uid
      email_verified
    }
  }
`

type SendState = 'IDLE' | 'SENDING' | 'SENT'

const VerifyEmail = () => {
  const { loading, error, data } = useQuery<Query, QueryVariables>(QUERY)
  const sendUserEmailVerify = useSendUserEmailVerify()

  const [sendState, setSendState] = useState<SendState>('IDLE')

  const handleResend = async () => {
    setSendState('SENDING')
    await sendUserEmailVerify()
    setSendState('SENT')
  }

  if (loading) {
    return (
      <Card>
        <Spin />
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <Alert message={error.message} type="error" />
      </Card>
    )
  }

  if (sendState === 'SENT') {
    return <Card>An email has been sent.</Card>
  }

  const emailVerified = data?.kc_user[0]?.email_verified ?? false

  if (!emailVerified) {
    return (
      <Card>
        Please verify your email address.
        <Button onClick={handleResend} loading={sendState === 'SENDING'}>
          Resend Verification Email
        </Button>
      </Card>
    )
  }

  return null
}

export { VerifyEmail }
