import { LoaderFunction, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { safeRedirect } from '~/utils/redirect.server'
import { Card } from '~/components/retro-ui'
import { AdminExchangeQuery } from '~/graphql/generated'

void (
  /* GraphQL */ `
    query getAdminExchangeList {
      exchange {
        created_at
        updated_at
        uid
        id
        name
        url
        primary_currencies {
          symbol
        }
        secondary_currencies {
          symbol
        }
      }
    }
  `
)

type Exchange = AdminExchangeQuery['exchange'][number]

type LoaderData = {
  exchangeList: Exchange[]
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role !== 'admin') {
    return safeRedirect(request, '/admin/login')
  }

  const query = await sdk.getAdminExchangeList(
    {},
    {
      'x-hasura-role': 'admin',
      authorization: `Bearer ${session.authToken}`,
    },
  )

  return json<LoaderData>({ exchangeList: query.exchange })
}

const ExchangeRoute = () => {
  const { exchangeList } = useLoaderData<LoaderData>()

  return (
    <Card width={1200}>
      <ul>
        {exchangeList.map((exchange) => (
          <li>
            {exchange.uid} | {exchange.created_at} | {exchange.name}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default ExchangeRoute
