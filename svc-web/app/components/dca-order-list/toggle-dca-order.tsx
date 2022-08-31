import { useFetcher } from '@remix-run/react'

import { PrimaryButton } from '~/components/retro-ui'

type Props = {
  dcaOrderUid: string
  enabledAt: string | undefined
}

const ToggleDcaOrder = (props: Props) => {
  const { dcaOrderUid, enabledAt } = props
  const fetcher = useFetcher()

  const isEnabled: boolean =
    fetcher.state === 'idle' ? Boolean(enabledAt) : !enabledAt

  return (
    <fetcher.Form name="ToggleDcaOrder" method="post">
      <input type="hidden" name="dcaOrderUid" value={dcaOrderUid} />
      <input type="hidden" name="enabled" value={String(!enabledAt)} />
      <PrimaryButton type="submit" name="_action" value="updateDcaOrderEnabled">
        {isEnabled ? 'ACTIVE' : 'PAUSED'}
      </PrimaryButton>
    </fetcher.Form>
  )
}

export { ToggleDcaOrder }
