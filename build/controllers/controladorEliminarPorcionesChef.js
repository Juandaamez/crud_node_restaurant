"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eliminarPorcionesChefs_1 = require("../repository/eliminarPorcionesChefs");
const DAO_Eliminar_1 = __importDefault(require("../daos/DAO_Eliminar"));
class controladorEliminarPorcionesChefs extends DAO_Eliminar_1.default {
    deletePorChe(req, res) {
        const miID = req.params.elID;
        const parametros = [miID];
        controladorEliminarPorcionesChefs.eliminar(eliminarPorcionesChefs_1.SQL_ELIMINAR.DELETE, parametros, res);
    }
}
const ctrl_EliminarPorChe = new controladorEliminarPorcionesChefs();
exports.default = ctrl_EliminarPorChe;
