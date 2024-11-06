module.exports = async (fastify, opts) => {
  fastify.get('/', async (request, reply) => {
    return reply.send({
      message: `Hello traefik ${Date.now()}`,
    });
  })
};
