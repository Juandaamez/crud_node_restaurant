"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarChef_1 = require("../repository/listarChef");
const DAO_Listar_1 = __importDefault(require("../daos/DAO_Listar"));
class controladorListarChef extends DAO_Listar_1.default {
    getChef(req, res) {
        controladorListarChef.listarTodosGeneral(listarChef_1.SQL_LISTAR.LISTAR_TODOS, [], res);
    }
    getChefid(req, res) {
        let id = req.params.id;
        controladorListarChef.listarTodosGeneral(listarChef_1.SQL_LISTAR.LISTAR_ID, id, res);
    }
    getChefTotal(req, res) {
        controladorListarChef.listarTodosGeneral(listarChef_1.SQL_LISTAR.LISTAR_TOTAL, [], res);
    }
}
const ctrl_listChef = new controladorListarChef();
exports.default = ctrl_listChef;
