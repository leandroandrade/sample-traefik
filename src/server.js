const autoLoad = require('@fastify/autoload');
const {join} = require('path');

const fastify = require('fastify')({
  logger: true
})

fastify.register(autoLoad, {
  dir: join(__dirname, 'routes'),
  options: {prefix: 'api'},
});

fastify.get('/', (req, reply) => {
  return { message: 'Up and running' };
});

fastify.listen({port: process.env.PORT || 3000, host: '0.0.0.0'}, (err, address) => {
  if (err) throw err
})
