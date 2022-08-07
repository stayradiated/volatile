import { ErrorDetails } from './error-details'
import { Card } from '~/components/retro-ui'
import { GetCronHistoryQuery } from '~/graphql/generated'

type CronHistory = NonNullable<GetCronHistoryQuery['cron_history_by_pk']>

type CronHistoryDetailsProps = {
  item: CronHistory
}

const CronHistoryDetails = (props: CronHistoryDetailsProps) => {
  const { item } = props

  return (
    <Card width={1200}>
      <h2>
        {item.created_at} {item.task_id} {item.state}
      </h2>
      <pre>
        <code>{JSON.stringify(item.input, null, 2)}</code>
      </pre>
      <ErrorDetails error={item.output} />
    </Card>
  )
}

export { CronHistoryDetails }
