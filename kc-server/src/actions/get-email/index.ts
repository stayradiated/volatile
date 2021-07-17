import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

import { ActionHandlerFn } from '../../utils/action-handler.js'
import { keyring } from '../../utils/keyring.js'

type Input = never
type Output = {
  email: string
}

const getEmailHandler: ActionHandlerFn<Input, Output> = async (context) => {
  const { pool, session } = context

  const uid = session['x-hasura-user-id']

  const [row] = await db.sql<s.user.SQL, s.user.Selectable[]>`
    SELECT ${'email_keyring_id'}, ${'email_encrypted'}
    FROM ${'user'}
    WHERE ${{ uid }}
  `.run(pool)

  if (!row) {
    return new Error('Could not read email for user')
  }

  const email = keyring.decrypt(row.email_encrypted, row.email_keyring_id)
  if (email instanceof Error) {
    return email
  }

  return {
    email,
  }
}

export { getEmailHandler }
