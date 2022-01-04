import { throwIfError, throwIfValue } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { deleteUser } from './delete-user.js'
import { selectUser } from './select-user.js'

test('should delete a user', async (t) => {
  const { pool, make } = t.context

  const userUID = await make.user()

  const deletedUserUIDS = await throwIfError<string[]>(
    deleteUser(pool, { userUID }),
  )
  t.deepEqual(deletedUserUIDS, [userUID])

  const user = await throwIfValue(selectUser(pool, userUID))
  t.is(user.message, 'E_DB: Could not find user.')
})
