"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DAO_Editar_1 = __importDefault(require("../daos/DAO_Editar"));
const editarChef_1 = require("../repository/editarChef");
class ControladorActualizarChefs extends DAO_Editar_1.default {
    actualizarChefs(req, res) {
        const idchef = req.body.idchef;
        const cc_cocinero = req.body.ccCocinero;
        const nombre_cocinero = req.body.nombreCocinero;
        const apellido_cocinero = req.body.apellidoCocinero;
        const segundo_apellido = req.body.segundoApellido;
        const fecha_nacimiento = req.body.fechaNacimiento;
        const parametro = [cc_cocinero, nombre_cocinero, apellido_cocinero, segundo_apellido, fecha_nacimiento, idchef];
        ControladorActualizarChefs.actualizar(editarChef_1.SQL_EDITAR.EDIT, parametro, res);
    }
}
const controladorActualizarChefs = new ControladorActualizarChefs();
exports.default = controladorActualizarChefs;
