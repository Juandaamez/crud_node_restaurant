"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createPorciones_1 = require("../repository/createPorciones");
const DAO_Crear_1 = __importDefault(require("../daos/DAO_Crear"));
class controladorCrearPorciones extends DAO_Crear_1.default {
    postPor(req, res) {
        const nombre_porcion = req.body.nombre_porcion;
        const calorias_porcion = req.body.calorias_porcion;
        const idingrediente = req.body.idingrediente;
        const idvino = req.body.idvino;
        const informacion = [nombre_porcion, calorias_porcion, idingrediente, idvino];
        controladorCrearPorciones.crear(createPorciones_1.Crear_Porciones.CREAR, informacion, res);
    }
}
const ctrl_CrearPor = new controladorCrearPorciones();
exports.default = ctrl_CrearPor;
