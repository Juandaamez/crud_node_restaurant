"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createIngredientes_1 = require("../repository/createIngredientes");
const DAO_Crear_1 = __importDefault(require("../daos/DAO_Crear"));
class controladorCrearIngredientes extends DAO_Crear_1.default {
    postIngredientes(req, res) {
        const nombre_ingrediente = req.body.nombre_ingrediente;
        const precio_ingrediente = req.body.precio_ingrediente;
        const calorias_ingrediente = req.body.calorias_ingrediente;
        const descripcion_ingrediente = req.body.descripcion_ingrediente;
        const existencias_ingrediente = req.body.existencias_ingrediente;
        const informacion = [nombre_ingrediente, precio_ingrediente, calorias_ingrediente, descripcion_ingrediente, existencias_ingrediente];
        controladorCrearIngredientes.crear(createIngredientes_1.CrearMatri.CREAR, informacion, res);
    }
}
const ctrl_CrearIng = new controladorCrearIngredientes();
exports.default = ctrl_CrearIng;
