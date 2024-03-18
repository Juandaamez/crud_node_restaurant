"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eliminarMenuPorciones_1 = require("../repository/eliminarMenuPorciones");
const DAO_Eliminar_1 = __importDefault(require("../daos/DAO_Eliminar"));
class controladorEliminarMenuPorciones extends DAO_Eliminar_1.default {
    deleteMePo(req, res) {
        const miID = req.params.elID;
        const parametros = [miID];
        controladorEliminarMenuPorciones.eliminar(eliminarMenuPorciones_1.SQL_ELIMINAR.DELETE, parametros, res);
    }
}
const ctrl_EliminarMePo = new controladorEliminarMenuPorciones();
exports.default = ctrl_EliminarMePo;
