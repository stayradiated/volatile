import { DateTime } from 'luxon'
import type * as s from 'zapatos/schema'

import type { UserDeviceMasked } from './types.js'

const mapRowToUserDevice = (
  row: s.user_device.JSONSelectable,
): UserDeviceMasked => ({
  UID: row.uid,
  accessedAt: DateTime.fromISO(row.accessed_at),
  userUID: row.user_uid,
  name: row.name,
  trusted: row.trusted,
})

export { mapRowToUserDevice }
