import * as z from 'zod'

const paginatedListSchema = (resultSchema: z.ZodType) =>
  z.object({
    total: z.number(),
    results: z.array(resultSchema),
  })

const dassetApiErrorBodySchema = z.object({
  status: z.number(),
  type: z.string(),
  code: z.number(),
  message: z.string(),
})

export { paginatedListSchema, dassetApiErrorBodySchema }
