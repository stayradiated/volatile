import { ActionHandlerFn } from '../../util/action-handler.js'
import { stripe } from '../../util/stripe.js'
import { getCustomer } from '../../model/customer/index.js'

type Input = Record<string, unknown>

type Output = {
  session_url: string
}

const customerPortalSessionHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, session } = context
  const { userUID } = session
  if (!userUID) {
    return new Error('userUID is required')
  }

  const customer = await getCustomer(pool, userUID)
  if (customer instanceof Error) {
    return customer
  }

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: customer.customerID,
    return_url: 'http://localhost:3001/account',
  })

  console.log(portalSession)

  return {
    session_url: portalSession.url,
  }
}

export { customerPortalSessionHandler }
