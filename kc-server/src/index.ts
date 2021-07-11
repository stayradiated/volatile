import { readConfig } from '@stayradiated/kc-config'
import createFastify from 'fastify'

import { CONFIG_PATH, PORT } from './env.js'
import pool from './pg-pool.js'
import { fetchMarketPrice } from './components/market-price/index.js'
// Import { initAutoBuy } from './components/auto-buy/index.js'

import type { ComponentProps } from './types.js'

const fastify = createFastify({
  logger: true,
})

fastify.post('/users', async (request, reply) => {
  await reply.send(request.body)
})

fastify.listen(PORT)

void (async function () {
  const config = await readConfig(CONFIG_PATH)
  if (config instanceof Error) {
    console.error(config)
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1)
  }

  const props: ComponentProps = {
    config,
    pool,
  }

  await Promise.all([
    fetchMarketPrice(props),
    // , initAutoBuy(props)
  ])
})()
