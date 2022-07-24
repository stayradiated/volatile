import styled from 'styled-components'

type AlertType = 'error'

type Props = {
  message: React.ReactNode
  type: AlertType
}

const Container = styled.div<{ type: AlertType }>`
  padding: 10px;

  ${(props) =>
    props.type === 'error' &&
    `
    border: 3px solid red;
    background: #fff;
  `}
`

const Alert = (props: Props) => {
  const { message, type } = props

  return <Container type={type}>{message}</Container>
}

export { Alert }
