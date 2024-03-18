"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DAO_Editar_1 = __importDefault(require("../daos/DAO_Editar"));
const editarMenuPorciones_1 = require("../repository/editarMenuPorciones");
class ControladorActualizarMenuPorciones extends DAO_Editar_1.default {
    actualizarMePo(req, res) {
        const idmenu = req.body.idmenu;
        const idporcion = req.body.idporcion;
        const parametro = [idporcion, idmenu];
        ControladorActualizarMenuPorciones.actualizar(editarMenuPorciones_1.SQL_EDITAR.EDIT, parametro, res);
    }
}
const controladorActualizarMePo = new ControladorActualizarMenuPorciones();
exports.default = controladorActualizarMePo;
