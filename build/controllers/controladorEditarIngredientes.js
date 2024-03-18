"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DAO_Editar_1 = __importDefault(require("../daos/DAO_Editar"));
const editarIngredientes_1 = require("../repository/editarIngredientes");
class ControladorActualizarIngredientes extends DAO_Editar_1.default {
    actualizarIngredientes(req, res) {
        const idingrediente = req.body.idingrediente;
        const nombre_ingrediente = req.body.nombre_ingrediente;
        const precio_ingrediente = req.body.precio_ingrediente;
        const calorias_ingrediente = req.body.calorias_ingrediente;
        const descripcion_ingrediente = req.body.descripcion_ingrediente;
        const existencias_ingrediente = req.body.existencias_ingrediente;
        const parametro = [nombre_ingrediente, precio_ingrediente, calorias_ingrediente,
            descripcion_ingrediente, existencias_ingrediente, idingrediente];
        ControladorActualizarIngredientes.actualizar(editarIngredientes_1.SQL_EDITAR.EDIT, parametro, res);
    }
}
const controladorActualizarIngredientes = new ControladorActualizarIngredientes();
exports.default = controladorActualizarIngredientes;
