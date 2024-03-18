"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LISTAR = void 0;
exports.SQL_LISTAR = {
    LISTAR_TODOS: "SELECT * FROM vinos vin ORDER BY vin.idvino ASC",
    LISTAR_ID: "SELECT * FROM vinos vin WHERE vin.idvino = $1",
    LISTAR_TOTAL: "SELECT COUNT(asg.idvino) FROM vinos vin",
};
