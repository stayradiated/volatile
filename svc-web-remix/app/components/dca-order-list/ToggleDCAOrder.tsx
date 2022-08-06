import { useFetcher } from '@remix-run/react'

import { PrimaryButton } from '~/components/retro-ui'

type Props = {
  dcaOrderUID: string
  enabledAt: string | undefined
}

const ToggleDCAOrder = (props: Props) => {
  const { dcaOrderUID, enabledAt } = props
  const fetcher = useFetcher()

  const isEnabled: boolean =
    fetcher.state === 'idle' ? Boolean(enabledAt) : !enabledAt

  return (
    <fetcher.Form name="ToggleDCAOrder" method="post">
      <input type="hidden" name="dcaOrderUID" value={dcaOrderUID} />
      <input type="hidden" name="enabled" value={String(!enabledAt)} />
      <PrimaryButton type="submit" name="_action" value="updateDCAOrderEnabled">
        {isEnabled ? 'ACTIVE' : 'PAUSED'}
      </PrimaryButton>
    </fetcher.Form>
  )
}

export { ToggleDCAOrder }
