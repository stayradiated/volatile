import styled from 'styled-components'

const Container = styled.ul`
  border-top: 1px solid #ccc;
  padding-top: 4px;
`
const PreWrap = styled.pre`
  white-space: pre-wrap;
`

type ErrorDetailsProps = {
  error: Record<string, any>
}

const ErrorDetails = (props: ErrorDetailsProps) => {
  const { error } = props
  const { name, code, info, message, stack, cause } = error

  return (
    <Container>
      {message && (
        <li>
          message: <code>{message}</code>
        </li>
      )}
      {name && (
        <li>
          name: <code>{name}</code>
        </li>
      )}
      {code && (
        <li>
          code: <code>{code}</code>
        </li>
      )}
      {info && (
        <li>
          info:{' '}
          <PreWrap>
            <code>{JSON.stringify(info, null, 2)}</code>
          </PreWrap>
        </li>
      )}
      {stack && (
        <li>
          stack:{' '}
          <PreWrap>
            <code>{stack}</code>
          </PreWrap>
        </li>
      )}
      {cause &&
        (Array.isArray(cause) ? (
          cause.map((c, index) => <ErrorDetails key={index} error={c} />)
        ) : (
          <ErrorDetails error={cause} />
        ))}
    </Container>
  )
}

export { ErrorDetails }
