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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCustomersControllers = void 0;
const ListCustomersServices_1 = require("../services/ListCustomersServices");
class ListCustomersControllers {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const listCustomersServices = new ListCustomersServices_1.ListCustomersServices();
            const customers = yield listCustomersServices.execute();
            reply.send(customers);
        });
    }
}
exports.ListCustomersControllers = ListCustomersControllers;
