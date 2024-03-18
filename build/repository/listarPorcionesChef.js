"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LISTAR = void 0;
exports.SQL_LISTAR = {
    LISTAR_TODOS: "SELECT * FROM porciones_cocineros pc ORDER BY pc.idporcion ASC",
    LISTAR_ID: "SELECT * FROM porciones_cocineros pc WHERE pc.idporcion = $1",
    LISTAR_TOTAL: "SELECT COUNT(pc.idporcion) FROM porciones_cocineros pc",
};
