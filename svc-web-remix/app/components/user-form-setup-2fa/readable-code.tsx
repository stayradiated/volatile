import styled from 'styled-components'

const Code = styled.code`
  font-weight: bold;
  font-size: 20px;
  margin-right: 8px;
`

type Props = {
  value: string
  groupBy?: number
}

const ReadableCode = (props: Props) => {
  const { value, groupBy = 4 } = props

  const groups = []
  for (let i = 0; i < value.length; i += groupBy) {
    groups.push(value.slice(i, i + groupBy))
  }

  return (
    <pre>
      {groups.map((group, index) => (
        <Code key={index}>{group}</Code>
      ))}
    </pre>
  )
}

export { ReadableCode }
