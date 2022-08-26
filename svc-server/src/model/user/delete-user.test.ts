import { assertOk, assertError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { deleteUser } from './delete-user.js'
import { selectUser } from './select-user.js'

test('should delete a user', async (t) => {
  const { pool, make } = t.context

  const userUid = await make.user()

  const deletedUserUidList = await deleteUser(pool, { userUid })
  assertOk(deletedUserUidList)

  t.deepEqual(deletedUserUidList, [userUid])

  const user = await selectUser(pool, userUid)
  assertError(user)
  t.is(user.message, 'E_DB: Could not find user.')
})
