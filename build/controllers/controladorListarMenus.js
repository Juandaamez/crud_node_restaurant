"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarMenus_1 = require("../repository/listarMenus");
const DAO_Listar_1 = __importDefault(require("../daos/DAO_Listar"));
class controladorListarMenus extends DAO_Listar_1.default {
    getMenus(req, res) {
        controladorListarMenus.listarTodosGeneral(listarMenus_1.SQL_LISTAR.LISTAR_TODOS, [], res);
    }
    getMenusid(req, res) {
        let id = req.params.id;
        controladorListarMenus.listarTodosGeneral(listarMenus_1.SQL_LISTAR.LISTAR_ID, id, res);
    }
    getMenusTotal(req, res) {
        controladorListarMenus.listarTodosGeneral(listarMenus_1.SQL_LISTAR.LISTAR_TOTAL, [], res);
    }
}
const ctrl_listMen = new controladorListarMenus();
exports.default = ctrl_listMen;
