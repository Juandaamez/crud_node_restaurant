"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createMenus_1 = require("../repository/createMenus");
const DAO_Crear_1 = __importDefault(require("../daos/DAO_Crear"));
class controladorCrearMenus extends DAO_Crear_1.default {
    postMen(req, res) {
        const codigo_menu = req.body.codigo_menu;
        const nombre_menu = req.body.nombre_menu;
        const precio_menu = req.body.precio_menu;
        const informacion = [codigo_menu, nombre_menu, precio_menu];
        controladorCrearMenus.crear(createMenus_1.Crear_Menus.CREAR, informacion, res);
    }
}
const ctrl_CrearMen = new controladorCrearMenus();
exports.default = ctrl_CrearMen;
