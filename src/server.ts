import Fastify from "fastify";
import cors from '@fastify/cors';
import { routes } from "./routes";

const app = Fastify({logger: true})

const port = process.env.PORT || 3001

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message})
})

const start = async () => {

    await app.register(cors, {origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,})
    await app.register(routes)

    try{
        await app.listen({port:3333})
    }
    catch(err){
        process.exit(1)
    }
}

start()