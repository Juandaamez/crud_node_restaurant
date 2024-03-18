"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const elminarMenus_1 = require("../repository/elminarMenus");
const DAO_Eliminar_1 = __importDefault(require("../daos/DAO_Eliminar"));
class controladorEliminarMenus extends DAO_Eliminar_1.default {
    deleteMen(req, res) {
        const miID = req.params.elID;
        const parametros = [miID];
        controladorEliminarMenus.eliminar(elminarMenus_1.SQL_ELIMINAR.DELETE, parametros, res);
    }
}
const ctrl_EliminarMen = new controladorEliminarMenus();
exports.default = ctrl_EliminarMen;
