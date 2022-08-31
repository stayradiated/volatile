import { ErrorDetails } from './error-details'
import { Card } from '~/components/retro-ui'
import type { CronHistoryFragment } from '~/graphql/generated'

type CronHistoryDetailsProps = {
  item: CronHistoryFragment
}

const CronHistoryDetails = (props: CronHistoryDetailsProps) => {
  const { item } = props

  return (
    <Card width={1200}>
      <h2>
        {item.createdAt} {item.taskId} {item.state}
      </h2>
      <pre>
        <code>{JSON.stringify(item.input, null, 2)}</code>
      </pre>
      {item.output && <ErrorDetails error={item.output} />}
    </Card>
  )
}

export { CronHistoryDetails }
