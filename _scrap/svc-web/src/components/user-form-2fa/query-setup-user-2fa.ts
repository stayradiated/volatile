import { gql, useLazyQuery } from '@apollo/client'

import type {
  SetupUser2FaQuery as Query,
  SetupUser2FaQueryVariables as QueryVariables,
} from '../../utils/graphql'

const QUERY = gql`
  query setupUser2FA {
    setup_user_2fa {
      qrcode
      secret
    }
  }
`

type Result = {
  qrcode: string
  secret: string
}

const useSetupUser2FA = () => {
  const [query] = useLazyQuery<Query, QueryVariables>(QUERY)

  return async (): Promise<Result> => {
    const result = await query()
    return result.data!.setup_user_2fa!
  }
}

export { useSetupUser2FA }
