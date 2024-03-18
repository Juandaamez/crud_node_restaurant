"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eliminarPorciones_1 = require("../repository/eliminarPorciones");
const DAO_Eliminar_1 = __importDefault(require("../daos/DAO_Eliminar"));
class controladorEliminarPorciones extends DAO_Eliminar_1.default {
    deletePor(req, res) {
        const miID = req.params.elID;
        const parametros = [miID];
        controladorEliminarPorciones.eliminar(eliminarPorciones_1.SQL_ELIMINAR.DELETE, parametros, res);
    }
}
const ctrl_EliminarPor = new controladorEliminarPorciones();
exports.default = ctrl_EliminarPor;
