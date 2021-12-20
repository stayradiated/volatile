import { IllegalStateError } from '../../util/error.js'

import { getUserEmail } from '../../model/user/index.js'

import type { ActionHandlerFn } from '../../util/action-handler.js'

type Input = {
  user_uid: string
}

type Output = {
  user_uid: string
  email: string
}

const queryUserEmailHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, input, session } = context
  const { role } = session
  if (role !== 'admin') {
    return new IllegalStateError({
      message: 'Only admin can query user email.',
      context: { role },
    })
  }

  console.log(input)

  const { user_uid: userUID } = input

  const email = await getUserEmail(pool, userUID)
  if (email instanceof Error) {
    return email
  }

  return {
    user_uid: userUID,
    email,
  }
}

export { queryUserEmailHandler }
