"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DAO_Editar_1 = __importDefault(require("../daos/DAO_Editar"));
const editarPorcionesCocineros_1 = require("../repository/editarPorcionesCocineros");
class ControladorActualizarPorcionesCocineros extends DAO_Editar_1.default {
    actualizarPorcionesCocineros(req, res) {
        const idporcion = req.body.idporcion;
        const idchef = req.body.idchef;
        const parametro = [idchef, idporcion];
        ControladorActualizarPorcionesCocineros.actualizar(editarPorcionesCocineros_1.SQL_EDITAR.EDIT, parametro, res);
    }
}
const controladorActualizarPorcionesCocineros = new ControladorActualizarPorcionesCocineros();
exports.default = controladorActualizarPorcionesCocineros;
