"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DAO_Editar_1 = __importDefault(require("../daos/DAO_Editar"));
const editarPorciones_1 = require("../repository/editarPorciones");
class ControladorActualizarPorciones extends DAO_Editar_1.default {
    actualizarPorciones(req, res) {
        const idporciones = req.body.idporciones;
        const nombre_porcion = req.body.nombre_porcion;
        const calorias_porcion = req.body.calorias_porcion;
        const idingrediente = req.body.idingrediente;
        const idvino = req.body.idvino;
        const parametro = [nombre_porcion, calorias_porcion, idingrediente, idvino, idporciones];
        ControladorActualizarPorciones.actualizar(editarPorciones_1.SQL_EDITAR.EDIT, parametro, res);
    }
}
const controladorActualizarPorciones = new ControladorActualizarPorciones();
exports.default = controladorActualizarPorciones;
