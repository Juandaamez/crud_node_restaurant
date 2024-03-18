"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LISTAR = void 0;
exports.SQL_LISTAR = {
    LISTAR_TODOS: "SELECT * FROM menu men ORDER BY men.id_menu ASC",
    LISTAR_ID: "SELECT * FROM menu men WHERE men.id_menu = $1",
    LISTAR_TOTAL: "SELECT COUNT(men.id_menu) FROM menu men",
};
