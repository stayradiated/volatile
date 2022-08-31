import styled from 'styled-components'

type ExchangeLogoProps = {
  exchangeID: string
}

const Logo = styled.div<{
  config: LogoConfig
}>`
  width: 30px;
  height: 30px;
  line-height: 30px;
  color: var(--white-100);
  text-align: center;
  font-weight: bold;
  ${(props) => `background-color: ${props.config.backgroundColor}`}
`

type LogoConfig = {
  text: string
  backgroundColor: string
}

const exchangeConfigRecord: Record<string, LogoConfig> = {
  'independentreserve.com': { text: 'IR', backgroundColor: '#003B5C' },
  'dassetx.com': { text: 'Da', backgroundColor: '#10214E' },
  'kiwi-coin.com': { text: 'KC', backgroundColor: '#5CB85C' },
}

const ExchangeLogo = (props: ExchangeLogoProps) => {
  const { exchangeID } = props
  const config = exchangeConfigRecord[exchangeID] ?? {
    text: '??',
    backgroundColor: 'red',
  }
  return <Logo config={config}>{config.text}</Logo>
}

export { ExchangeLogo }
