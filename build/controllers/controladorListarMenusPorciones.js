"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarMenusPorciones_1 = require("../repository/listarMenusPorciones");
const DAO_Listar_1 = __importDefault(require("../daos/DAO_Listar"));
class controladorListarMenusPorciones extends DAO_Listar_1.default {
    getMoPe(req, res) {
        controladorListarMenusPorciones.listarTodosGeneral(listarMenusPorciones_1.SQL_LISTAR.LISTAR_TODOS, [], res);
    }
    getMoPeid(req, res) {
        let id = req.params.id;
        controladorListarMenusPorciones.listarTodosGeneral(listarMenusPorciones_1.SQL_LISTAR.LISTAR_ID, id, res);
    }
    getMoPeTotal(req, res) {
        controladorListarMenusPorciones.listarTodosGeneral(listarMenusPorciones_1.SQL_LISTAR.LISTAR_TOTAL, [], res);
    }
}
const ctrl_listMoPe = new controladorListarMenusPorciones();
exports.default = ctrl_listMoPe;
