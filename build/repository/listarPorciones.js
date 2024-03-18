"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LISTAR = void 0;
exports.SQL_LISTAR = {
    LISTAR_TODOS: "SELECT * FROM porciones por ORDER BY por.idporciones ASC",
    LISTAR_ID: "SELECT * FROM porciones por WHERE por.idporciones = $1",
    LISTAR_TOTAL: "SELECT COUNT(por.idporciones) FROM porciones por",
};
