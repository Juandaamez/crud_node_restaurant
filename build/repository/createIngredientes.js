"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrearMatri = void 0;
exports.CrearMatri = {
    CREAR: "INSERT INTO ingredientes (nombre_ingrediente, precio_ingrediente, calorias_ingrediente, descripcion_ingrediente, existencias_ingrediente)\
    VALUES ($1, $2, $3, $4, $5) RETURNING idingrediente"
};
