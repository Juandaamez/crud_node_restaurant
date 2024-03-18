"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const elimarVinos_1 = require("../repository/elimarVinos");
const DAO_Eliminar_1 = __importDefault(require("../daos/DAO_Eliminar"));
class controladorEliminarVinos extends DAO_Eliminar_1.default {
    deleteVin(req, res) {
        const miID = req.params.elID;
        const parametros = [miID];
        controladorEliminarVinos.eliminar(elimarVinos_1.SQL_ELIMINAR.DELETE, parametros, res);
    }
}
const ctrl_EliminarVin = new controladorEliminarVinos();
exports.default = ctrl_EliminarVin;
