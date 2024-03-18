"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crear_MenuPorcion = void 0;
exports.Crear_MenuPorcion = {
    CREAR: "INSERT INTO menu_pociones (idmenu, idporcion)\
    VALUES ($1, $2) RETURNING idmenu"
};
