"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LISTAR = void 0;
exports.SQL_LISTAR = {
    LISTAR_TODOS: "SELECT * FROM chefs che ORDER BY che.idchef ASC",
    LISTAR_ID: "SELECT * FROM chefs che WHERE che.idchef = $1",
    LISTAR_TOTAL: "SELECT COUNT(che.idchef) FROM chefs che",
};
