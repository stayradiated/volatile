import { useLoaderData, useActionData } from '@remix-run/react'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { errorBoundary } from '@stayradiated/error-boundary'
import { Card } from '~/components/retro-ui'

import { UserExchangeKeysValidate } from '~/components/user-exchange-keys-validate'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

type ActionData = {
  error?: string
  isValid: boolean
  validationMessage: string | undefined
}

export const action: ActionFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: userExchangeKeysUid } = params
  invariant(userExchangeKeysUid, 'Must have params.uid')

  const result = await errorBoundary(async () =>
    sdk.validateUserExchangeKeys(
      {
        userExchangeKeysUid,
      },
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'user',
      },
    ),
  )
  if (result instanceof Error) {
    console.error('ERROR', result)
    return json<ActionData>({
      error: result.message,
      isValid: false,
      validationMessage: '',
    })
  }

  const { isValid, validationMessage } = result.actionValidateUserExchangeKeys!

  return json<ActionData>({
    isValid,
    validationMessage: validationMessage ?? undefined,
  })
}

type LoaderData = {
  userExchangeKeysUid: string
}

export const loader: LoaderFunction = async ({ params }) => {
  const { uid: userExchangeKeysUid } = params
  invariant(userExchangeKeysUid, 'Expected params.uid')

  return json<LoaderData>({
    userExchangeKeysUid,
  })
}

const EditRoute = () => {
  const { userExchangeKeysUid } = useLoaderData<LoaderData>()
  const actionData = useActionData<ActionData>()
  const { error, isValid, validationMessage } = actionData ?? {}

  return (
    <Card width={400}>
      <UserExchangeKeysValidate
        userExchangeKeysUid={userExchangeKeysUid}
        error={error}
        isValid={isValid}
        validationMessage={validationMessage}
      />
    </Card>
  )
}

export default EditRoute
