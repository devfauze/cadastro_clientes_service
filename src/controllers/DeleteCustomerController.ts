import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomersServices } from "../services/DeleteCustomersServices";

class DeleteCustomerController{
    async handle(request: FastifyRequest, reply:FastifyReply){
        const { id } = request.query as { id: string }
        const customerService = new DeleteCustomersServices

        const customer = await customerService.execute({ id })

        reply.send(customer)
    }
}

export { DeleteCustomerController }