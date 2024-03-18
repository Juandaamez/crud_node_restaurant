"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarVinos_1 = require("../repository/listarVinos");
const DAO_Listar_1 = __importDefault(require("../daos/DAO_Listar"));
class controladorListarVinos extends DAO_Listar_1.default {
    getVinos(req, res) {
        controladorListarVinos.listarTodosGeneral(listarVinos_1.SQL_LISTAR.LISTAR_TODOS, [], res);
    }
    getVinosid(req, res) {
        let id = req.params.id;
        controladorListarVinos.listarTodosGeneral(listarVinos_1.SQL_LISTAR.LISTAR_ID, id, res);
    }
    getVinosTotal(req, res) {
        controladorListarVinos.listarTodosGeneral(listarVinos_1.SQL_LISTAR.LISTAR_TOTAL, [], res);
    }
}
const ctrl_listVinos = new controladorListarVinos();
exports.default = ctrl_listVinos;
