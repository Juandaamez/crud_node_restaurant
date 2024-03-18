"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createMenusPorciones_1 = require("./../repository/createMenusPorciones");
const DAO_Crear_1 = __importDefault(require("../daos/DAO_Crear"));
class controladorCrearMenusPorcion extends DAO_Crear_1.default {
    postMePo(req, res) {
        const idmenu = req.body.idmenu;
        const idporcion = req.body.idporcion;
        const informacion = [idmenu, idporcion];
        controladorCrearMenusPorcion.crear(createMenusPorciones_1.Crear_MenuPorcion.CREAR, informacion, res);
    }
}
const ctrl_CrearMepo = new controladorCrearMenusPorcion();
exports.default = ctrl_CrearMepo;
