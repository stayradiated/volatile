import { Form } from '@remix-run/react'

import { PrimaryButton } from '~/components/retro-ui'

type Props = {
  returnTo: string | undefined
}

const SudoForm = (props: Props) => {
  const { returnTo } = props

  return (
    <Form method="post">
      <label htmlFor="password">Password</label>
      <input type="hidden" name="return" value={returnTo} />
      <input id="password" type="password" name="password" />
      <PrimaryButton type="submit">Confirm Password</PrimaryButton>
    </Form>
  )
}

export { SudoForm }
