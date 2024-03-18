"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createPorcionesCocineros_1 = require("../repository/createPorcionesCocineros");
const DAO_Crear_1 = __importDefault(require("../daos/DAO_Crear"));
class controladorCrearPorcionesCocineros extends DAO_Crear_1.default {
    postPorche(req, res) {
        const idporcion = req.body.idporcion;
        const idchef = req.body.idchef;
        const informacion = [idporcion, idchef];
        controladorCrearPorcionesCocineros.crear(createPorcionesCocineros_1.Crear_PorcionChef.CREAR, informacion, res);
    }
}
const ctrl_CrearPorche = new controladorCrearPorcionesCocineros();
exports.default = ctrl_CrearPorche;
