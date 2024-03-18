"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DAO_Editar_1 = __importDefault(require("../daos/DAO_Editar"));
const editarMenus_1 = require("../repository/editarMenus");
class ControladorActualizarMenus extends DAO_Editar_1.default {
    actualizarMenus(req, res) {
        const id_menu = req.body.idMenu;
        const codigo_menu = req.body.codigoMenu;
        const nombre_menu = req.body.nombreMenu;
        const precio_menu = req.body.precioMenu;
        const parametro = [codigo_menu, nombre_menu, precio_menu, id_menu];
        ControladorActualizarMenus.actualizar(editarMenus_1.SQL_EDITAR.EDIT, parametro, res);
    }
}
const controladorActualizarMenus = new ControladorActualizarMenus();
exports.default = controladorActualizarMenus;
