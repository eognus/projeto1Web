/** @type{import('fastify').FastifyPluginAsync<>} */
export default async function register(app, options) {
    
    app.post('/register', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    id: { type: 'integer' },
                    name: { type: 'string' },
                    password: { type: 'string' }
                },
                required: ['name', 'password']
            }
        }
    },  async(request, reply) => {
        let user = request.body;
        
        await users.insertOne(user);

        return reply.code(201).send();
    });
}