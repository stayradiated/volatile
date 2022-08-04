import { Form, Input } from '../retro-ui'

type KeysProps = {
  exchangeID: string | undefined
  value?: Record<string, string>
  onChange?: (value: Record<string, string>) => void
}

const KeysDasset = (props: KeysProps) => {
  const { value = {}, onChange } = props

  return (
    <Form.ItemGroup formName="keysDasset" state={value} onChange={onChange}>
      <Form.Item label="Dasset API Secret" name="apiKey">
        <Input placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
      </Form.Item>
      <Form.Item label="Dasset Account ID" name="accountId">
        <Input placeholder="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" />
      </Form.Item>
    </Form.ItemGroup>
  )
}

const KeysKiwiCoin = (props: KeysProps) => {
  const { value = {}, onChange } = props

  return (
    <Form.ItemGroup formName="keysDasset" state={value} onChange={onChange}>
      <Form.Item label="Kiwi-Coin User Access Code" name="userId">
        <Input placeholder="XXXX-XXXX-XXXX" />
      </Form.Item>
      <Form.Item label="Kiwi-Coin API Key" name="apiKey">
        <Input placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
      </Form.Item>
      <Form.Item label="Kiwi-Coin API Secret" name="apiSecret">
        <Input placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
      </Form.Item>
    </Form.ItemGroup>
  )
}

const KeysIndependentReserve = (props: KeysProps) => {
  const { value = {}, onChange } = props

  return (
    <Form.ItemGroup formName="keysDasset" state={value} onChange={onChange}>
      <Form.Item label="Independent Reserve API Key" name="apiKey">
        <Input placeholder="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" />
      </Form.Item>
      <Form.Item label="Independent Reserve API Secret" name="apiSecret">
        <Input placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
      </Form.Item>
    </Form.ItemGroup>
  )
}

const KeysInput = (props: KeysProps) => {
  const { exchangeID } = props
  switch (exchangeID) {
    case 'dassetx.com':
      return <KeysDasset {...props} />
    case 'kiwi-coin.com':
      return <KeysKiwiCoin {...props} />
    case 'independentreserve.com':
      return <KeysIndependentReserve {...props} />
    default:
      return null
  }
}

export { KeysInput }
