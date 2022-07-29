import { useLoaderData, useActionData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json } from '@remix-run/node'
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

  const { uid: userExchangeKeysUID } = params
  invariant(userExchangeKeysUID, 'Must have params.uid')

  const result = await errorBoundary(async () =>
    sdk.validateUserExchangeKeys(
      {
        userExchangeKeysUID,
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

  const { is_valid: isValid, validation_message: validationMessage } =
    result.validate_user_exchange_keys!

  return json<ActionData>({
    isValid,
    validationMessage: validationMessage ?? undefined,
  })
}

interface LoaderData {
  userExchangeKeysUID: string
}

export const loader: LoaderFunction = async ({ params }) => {
  const { uid: userExchangeKeysUID } = params
  invariant(userExchangeKeysUID, 'Expected params.uid')

  return json<LoaderData>({
    userExchangeKeysUID,
  })
}

const EditRoute = () => {
  const { userExchangeKeysUID } = useLoaderData<LoaderData>()
  const actionData = useActionData<ActionData>()
  const { error, isValid, validationMessage } = actionData ?? {}

  console.log({ actionData })

  return (
    <Card width={400}>
      <UserExchangeKeysValidate
        userExchangeKeysUID={userExchangeKeysUID}
        error={error}
        isValid={isValid}
        validationMessage={validationMessage}
      />
    </Card>
  )
}

export default EditRoute
