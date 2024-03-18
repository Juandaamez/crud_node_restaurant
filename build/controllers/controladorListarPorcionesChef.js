"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarPorcionesChef_1 = require("../repository/listarPorcionesChef");
const DAO_Listar_1 = __importDefault(require("../daos/DAO_Listar"));
class controladorListarPorcionesChef extends DAO_Listar_1.default {
    getPorChe(req, res) {
        controladorListarPorcionesChef.listarTodosGeneral(listarPorcionesChef_1.SQL_LISTAR.LISTAR_TODOS, [], res);
    }
    getPorCheid(req, res) {
        let id = req.params.id;
        controladorListarPorcionesChef.listarTodosGeneral(listarPorcionesChef_1.SQL_LISTAR.LISTAR_ID, id, res);
    }
    getPorCheTotal(req, res) {
        controladorListarPorcionesChef.listarTodosGeneral(listarPorcionesChef_1.SQL_LISTAR.LISTAR_TOTAL, [], res);
    }
}
const ctrl_listPorChe = new controladorListarPorcionesChef();
exports.default = ctrl_listPorChe;
