"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DAO_Editar_1 = __importDefault(require("../daos/DAO_Editar"));
const editarVinos_1 = require("../repository/editarVinos");
class ControladorActualizarVinos extends DAO_Editar_1.default {
    actualizarVinos(req, res) {
        const idvino = req.body.idvino;
        const tipo_vino = req.body.tipo_vino;
        const nombre_vino = req.body.nombre_vino;
        const fecha_vino = req.body.fecha_vino;
        const parametro = [tipo_vino, nombre_vino, fecha_vino, idvino];
        ControladorActualizarVinos.actualizar(editarVinos_1.SQL_EDITAR.EDIT, parametro, res);
    }
}
const controladorActualizarVinos = new ControladorActualizarVinos();
exports.default = controladorActualizarVinos;
