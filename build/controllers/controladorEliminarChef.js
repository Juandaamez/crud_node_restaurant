"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const elminarChef_1 = require("../repository/elminarChef");
const DAO_Eliminar_1 = __importDefault(require("../daos/DAO_Eliminar"));
class controladorEliminarChef extends DAO_Eliminar_1.default {
    deleteChef(req, res) {
        const miID = req.params.elID;
        const parametros = [miID];
        controladorEliminarChef.eliminar(elminarChef_1.SQL_ELIMINAR.DELETE, parametros, res);
    }
}
const ctrl_EliminarChef = new controladorEliminarChef();
exports.default = ctrl_EliminarChef;
