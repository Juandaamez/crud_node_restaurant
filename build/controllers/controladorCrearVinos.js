"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createVinos_1 = require("../repository/createVinos");
const DAO_Crear_1 = __importDefault(require("../daos/DAO_Crear"));
class controladorCrearVinos extends DAO_Crear_1.default {
    postVinos(req, res) {
        const nombre_vino = req.body.nombreVino;
        const tipo_vino = req.body.tipoVino;
        const fecha_vino = req.body.fechaVino;
        const informacion = [nombre_vino, fecha_vino, tipo_vino];
        controladorCrearVinos.crear(createVinos_1.Crear_Vino.CREAR, informacion, res);
    }
}
const ctrl_CrearVin = new controladorCrearVinos();
exports.default = ctrl_CrearVin;
