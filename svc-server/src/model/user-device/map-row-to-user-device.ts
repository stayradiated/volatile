import type * as s from 'zapatos/schema'
import { parseISO } from 'date-fns'

import type { UserDeviceMasked } from './types.js'

const mapRowToUserDevice = (
  row: s.user_device.JSONSelectable,
): UserDeviceMasked => ({
  uid: row.uid,
  accessedAt: parseISO(row.accessed_at),
  userUid: row.user_uid,
  name: row.name,
  trusted: row.trusted,
})

export { mapRowToUserDevice }
