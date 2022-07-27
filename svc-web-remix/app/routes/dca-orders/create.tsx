import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { errorBoundary } from '@stayradiated/error-boundary'
import invariant from 'tiny-invariant'
import { Static, Type } from '@sinclair/typebox'
import addFormats from 'ajv-formats'
import Ajv        from 'ajv'

import { Card } from '~/components/retro-ui'
import { DCAOrderFormCreate } from '~/components/dca-order-form-create'
import { GetDcaOrderFormCreateQuery } from '~/graphql/generated'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'

const ajv = addFormats(new Ajv({ coerceTypes: true }), [
  'date-time', 
  'time', 
  'date', 
  'email',  
  'hostname', 
  'ipv4', 
  'ipv6', 
  'uri', 
  'uri-reference', 
  'uuid',
  'uri-template', 
  'json-pointer', 
  'relative-json-pointer', 
  'regex'
])

const formDataSchema = Type.Strict(Type.Object({
  userExchangeKeysUID: Type.String({ format: 'uuid' }),
  primaryCurrency: Type.String(),
  secondaryCurrency: Type.String(),
  marketUID: Type.String({ format: 'uuid' }),
  startAt: Type.String({ format: 'date-time' }),
  marketOffset: Type.Number(),
  dailyAverage: Type.Number(),
  intervalMs: Type.Integer(),
  minValue: Type.Number(),
  maxValue: Type.Number(),
}))

type FormData = Static<typeof formDataSchema>

export const action: ActionFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)
  invariant(authToken, 'Must be logged in')

  const formData = Object.fromEntries((await request.formData()).entries()) as unknown as FormData
  const validate = ajv.compile(formDataSchema)
  const isValid = validate(formData)
  if (!isValid) { throw validate.errors }

  await sdk.createDCAOrder(formData, {
    authorization: `Bearer ${authToken}`
  })

  return redirect('/dca-orders')
}

interface LoaderData {
  query: {
    getDCAOrderFormCreate: GetDcaOrderFormCreateQuery
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)

  const getDCAOrderFormCreate = await errorBoundary(async () =>
    sdk.getDCAOrderFormCreate(
      {},
      {
        authorization: `Bearer ${authToken}`,
      },
    ),
  )
  if (getDCAOrderFormCreate instanceof Error) {
    throw getDCAOrderFormCreate
  }

  const query = { getDCAOrderFormCreate }

  return json<LoaderData>({
    query,
  })
}

const DCAOrderCreateRoute = () => {
  const { query } = useLoaderData<LoaderData>()

  return (
    <Card>
      <DCAOrderFormCreate query={query.getDCAOrderFormCreate} />
    </Card>
  )
}

export default DCAOrderCreateRoute
