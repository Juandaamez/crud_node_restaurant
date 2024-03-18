"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_EDITAR = void 0;
exports.SQL_EDITAR = {
    EDIT: "UPDATE ingredientes SET nombre_ingrediente = $1, precio_ingrediente = $2,\
    calorias_ingrediente = $3, descripcion_ingrediente = $4, existencias_ingrediente = $5\
    WHERE idingrediente = $6"
};
