import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersServices } from '../services/ListCustomersServices'

class ListCustomersControllers{
    async handle(request: FastifyRequest , reply:FastifyReply ){
        const listCustomersServices = new ListCustomersServices()

        const customers = await listCustomersServices.execute()

        reply.send(customers)
    }
}

export { ListCustomersControllers }