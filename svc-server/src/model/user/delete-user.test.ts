import { throwIfError, throwIfValue } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { deleteUser } from './delete-user.js'
import { selectUser } from './select-user.js'

test('should delete a user', async (t) => {
  const { pool, make } = t.context

  const userUid = await make.user()

  const deletedUseruidS = await throwIfError<string[]>(
    deleteUser(pool, { userUid }),
  )
  t.deepEqual(deletedUseruidS, [userUid])

  const user = await throwIfValue(selectUser(pool, userUid))
  t.is(user.message, 'E_DB: Could not find user.')
})
