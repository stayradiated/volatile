import { useRef, useCallback } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import Select, { SelectInstance } from 'react-select'

const QUERY_EXCHANGE_KEYS_FORM = gql`
  query query_exchange_keys_form {
    kc_exchange {
      uid
      name
    }
  }
`

type QueryExchangeKeysFormData = {
  kc_exchange: {
    uid: string
    name: string
  }
}

const MUTATION_CREATE_USER_EXCHANGE_KEYS = gql`
  mutation create_user_exchange_keys(
    $description: String!
    $exchangeUID: uuid!
    $keys: jsonb!
  ) {
    create_user_exchange_keys(
      description: $description
      exchange_uid: $exchangeUID
      keys: $keys
    ) {
      user_exchange_keys {
        uid
        description
        exchange {
          uid
        }
        invalidated_at
        dca_orders_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
`

type Exchange = {
  uid: string
  name: string
}

const UserExchangeKeysForm = () => {
  const { data, loading, error } = useQuery<QueryExchangeKeysFormData>(
    QUERY_EXCHANGE_KEYS_FORM,
  )
  const [createUserExchangeKeys] = useMutation(
    MUTATION_CREATE_USER_EXCHANGE_KEYS,
  )

  const exchangeRef = useRef<SelectInstance<Exchange>>(null)
  const descriptionRef = useRef<HTMLInputElement>(null)
  const keysRef = useRef<HTMLInputElement>(null)

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault()

    const exchange = exchangeRef?.current?.getValue()[0]
    if (!exchange) {
      return new Error('Could not get exchange')
    }

    const description = descriptionRef?.current?.value
    const keys = keysRef?.current?.value
    await createUserExchangeKeys({
      variables: {
        exchangeUID: exchange.uid,
        description,
        keys,
      },
      update: (cache, response) => {
        const { data } = response
        cache.modify({
          fields: {
            kc_user_exchange_keys: (list) => {
              const newItem = cache.writeFragment({
                data: data.create_user_exchange_keys.user_exchange_keys,
                fragment: gql`
                  fragment NewKeys on kc_user_exchange_keys {
                    uid
                    description
                    exchange {
                      uid
                    }
                    invalidated_at
                    dca_orders_aggregate {
                      aggregate {
                        count
                      }
                    }
                  }
                `,
              })
              return [...list, newItem]
            },
          },
        })
      },
    })
  }, [])

  if (loading) {
    return <p>loading exchange list...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  const options = (data?.kc_exchange ?? []) as Exchange[]

  return (
    <div>
      <h4>Add User Exchange Key</h4>
      <form onSubmit={handleSubmit}>
        <Select<Exchange>
          ref={exchangeRef}
          placeholder="Exchange"
          options={options}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.uid}
        />
        <input ref={descriptionRef} type="text" placeholder="Description" />
        <input ref={keysRef} type="text" placeholder="API Keys" />
        <input type="submit" value="Add Exchange" />
      </form>
    </div>
  )
}

export { UserExchangeKeysForm }
