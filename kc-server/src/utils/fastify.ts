import createFastify from 'fastify'

const fastify = createFastify({
  logger: true,
})

export { fastify }
