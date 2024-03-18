"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarPorciones_1 = require("../repository/listarPorciones");
const DAO_Listar_1 = __importDefault(require("../daos/DAO_Listar"));
class controladorListarPorciones extends DAO_Listar_1.default {
    getPor(req, res) {
        controladorListarPorciones.listarTodosGeneral(listarPorciones_1.SQL_LISTAR.LISTAR_TODOS, [], res);
    }
    getPorid(req, res) {
        let id = req.params.id;
        controladorListarPorciones.listarTodosGeneral(listarPorciones_1.SQL_LISTAR.LISTAR_ID, id, res);
    }
    getPorTotal(req, res) {
        controladorListarPorciones.listarTodosGeneral(listarPorciones_1.SQL_LISTAR.LISTAR_TOTAL, [], res);
    }
}
const ctrl_listPor = new controladorListarPorciones();
exports.default = ctrl_listPor;
