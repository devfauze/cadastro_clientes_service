"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomersServices = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class DeleteCustomersServices {
    execute({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error("Solitação inválida.");
            }
            const findCustomer = yield prisma_1.default.customer.findFirst({
                where: {
                    id: id
                }
            });
            if (!findCustomer) {
                throw new Error("Cliente não encontrado");
            }
            yield prisma_1.default.customer.delete({
                where: {
                    id: findCustomer.id
                }
            });
            return { message: "Deletado com sucesso!" };
        });
    }
}
exports.DeleteCustomersServices = DeleteCustomersServices;
