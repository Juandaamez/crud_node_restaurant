"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const elminarIngredientes_1 = require("../repository/elminarIngredientes");
const DAO_Eliminar_1 = __importDefault(require("../daos/DAO_Eliminar"));
class controladorEliminarIngredientes extends DAO_Eliminar_1.default {
    deleteingredientes(req, res) {
        const miID = req.params.elID;
        const parametros = [miID];
        controladorEliminarIngredientes.eliminar(elminarIngredientes_1.SQL_ELIMINAR.DELETE, parametros, res);
    }
}
const ctrl_EliminarIng = new controladorEliminarIngredientes();
exports.default = ctrl_EliminarIng;
