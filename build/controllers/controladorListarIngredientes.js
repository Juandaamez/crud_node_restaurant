"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarIngredientes_1 = require("../repository/listarIngredientes");
const DAO_Listar_1 = __importDefault(require("../daos/DAO_Listar"));
class controladorListarIngrdientes extends DAO_Listar_1.default {
    getIngredientes(req, res) {
        controladorListarIngrdientes.listarTodosGeneral(listarIngredientes_1.SQL_LISTAR.LISTAR_TODOS, [], res);
    }
    getEIngredientesid(req, res) {
        let id = req.params.id;
        controladorListarIngrdientes.listarTodosGeneral(listarIngredientes_1.SQL_LISTAR.LISTAR_ID, id, res);
    }
    getIngredientesTotal(req, res) {
        controladorListarIngrdientes.listarTodosGeneral(listarIngredientes_1.SQL_LISTAR.LISTAR_TOTAL, [], res);
    }
}
const ctrl_listIng = new controladorListarIngrdientes();
exports.default = ctrl_listIng;
