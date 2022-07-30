import Stripe from 'stripe'

import { config } from '../env.js'

const stripe = new Stripe(config.STRIPE_API_KEY, {
  apiVersion: '2020-08-27',
})

export { stripe }
