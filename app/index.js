const detector = require('./src/detector');

const fastify = require('fastify')({
  logger: true
})

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.get('/getinfo', async (request, reply) => {
	console.log(request);
	console.log(request.query.url);
	reply.type('application/json').code(200)
	if(typeof request.query.url!=="undefined"){
		let info = await detector.get(request.query.url);
		//return { info }
		reply.send({ info })
	}
  //return { hello: 'world' }
  reply.send({ hello: 'world' })
})

fastify.listen(3011, "0.0.0.0", (err, address) => {
	console.log(address);
  if (err) throw err
  console.log("Server is now listening on "+address);
})