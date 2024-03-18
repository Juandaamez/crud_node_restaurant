"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createChefs_1 = require("../repository/createChefs");
const DAO_Crear_1 = __importDefault(require("../daos/DAO_Crear"));
class controladorCrearChef extends DAO_Crear_1.default {
    postChef(req, res) {
        const cc_cocinero = req.body.ccCocinero;
        const nombre_cocinero = req.body.nombreCocinero;
        const apellido_cocinero = req.body.apellidoCocinero;
        const segundo_apellido = req.body.segundoApellido;
        const fecha_nacimiento = req.body.fechaNacimiento;
        const informacion = [cc_cocinero, nombre_cocinero, apellido_cocinero, segundo_apellido, fecha_nacimiento];
        controladorCrearChef.crear(createChefs_1.CrearChef.CREAR, informacion, res);
    }
}
const ctrl_CrearChef = new controladorCrearChef();
exports.default = ctrl_CrearChef;
