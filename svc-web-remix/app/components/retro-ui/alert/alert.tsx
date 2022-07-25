import styled from 'styled-components'

type AlertType = 'error' | 'info'

type Props = {
  message: React.ReactNode
  type: AlertType
}

const Container = styled.div<{ type: AlertType }>`
  padding: 10px;

  ${(props) => { switch (props.type) {
    case 'error': { return `
      border: 3px solid red;
      background: #fff;
    `}
    case 'info': { return `
      border: 3px solid green;
      background: #fff;
    `}
  }}}
`

const Alert = (props: Props) => {
  const { message, type } = props

  return <Container type={type}>{message}</Container>
}

export { Alert }
