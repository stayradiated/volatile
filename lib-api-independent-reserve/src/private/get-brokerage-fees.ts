import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import type { Config } from '../util/types.js'
import { post, getResponseBody } from '../util/client.js'

type GetBrokerageFeesOptions = {
  config: Config
}

/* eslint-disable @typescript-eslint/naming-convention */
const responseSchema = z.array(
  z.object({
    CurrencyCode: z.string(),
    Fee: z.number(),
  }),
)
/* eslint-enable @typescript-eslint/naming-convention */

type GetBrokerageFeesResult = z.infer<typeof responseSchema>

const getBrokerageFees = async (
  options: GetBrokerageFeesOptions,
): Promise<[GetBrokerageFeesResult | Error, Kanye?]> => {
  const { config } = options
  const raw = await post(config, 'Private/GetBrokerageFees', {})
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getBrokerageFees }
