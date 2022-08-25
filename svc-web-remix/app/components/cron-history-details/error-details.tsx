import styled from 'styled-components'

const Container = styled.ul`
  border-top: 1px solid #ccc;
  padding-top: 4px;
`
const PreWrap = styled.pre`
  white-space: pre-wrap;
`

type ErrorInfo = {
  name?: string
  code?: string
  info?: string
  message?: string
  stack?: string
  cause?: ErrorInfo | ErrorInfo[]
}

type ErrorDetailsProps = {
  error: ErrorInfo
}

const ErrorDetails = (props: ErrorDetailsProps) => {
  const { error } = props
  const { name, code, info, message, stack, cause } = error

  return (
    <Container>
      {typeof message === 'string' && (
        <li>
          message: <code>{message}</code>
        </li>
      )}
      {typeof name === 'string' && (
        <li>
          name: <code>{name}</code>
        </li>
      )}
      {typeof code === 'string' && (
        <li>
          code: <code>{code}</code>
        </li>
      )}
      {typeof info === 'object' && (
        <li>
          info:{' '}
          <PreWrap>
            <code>{JSON.stringify(info, null, 2)}</code>
          </PreWrap>
        </li>
      )}
      {typeof stack === 'string' && (
        <li>
          stack:{' '}
          <PreWrap>
            <code>{stack}</code>
          </PreWrap>
        </li>
      )}
      {Array.isArray(cause) ? (
        cause.map((c, index) => <ErrorDetails key={index} error={c} />)
      ) : typeof cause === 'object' ? (
        <ErrorDetails error={cause} />
      ) : null}
    </Container>
  )
}

export { ErrorDetails }
