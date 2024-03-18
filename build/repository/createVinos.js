"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crear_Vino = void 0;
exports.Crear_Vino = {
    CREAR: "INSERT INTO vinos (nombre_vino, fecha_vino, tipo_vino)\
    VALUES ($1, $2, $3) RETURNING idvino"
};
