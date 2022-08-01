import { Form } from '@remix-run/react'
import { PrimaryButton } from '~/components/retro-ui'

type Props = {
  subscriptionID: string
  cancelAtPeriodEnd: boolean
}

const UpdateSubscriptionButton = (props: Props) => {
  const { subscriptionID, cancelAtPeriodEnd } = props

  return (
    <Form method="post">
      <input type="hidden" name="subscriptionID" value={subscriptionID} />
      <input
        type="hidden"
        name="cancelAtPeriodEnd"
        value={String(cancelAtPeriodEnd)}
      />
      <PrimaryButton name="_action" value="updateStripeSubscription">
        {cancelAtPeriodEnd ? 'Cancel' : 'Resume'}
      </PrimaryButton>
    </Form>
  )
}

export { UpdateSubscriptionButton }
