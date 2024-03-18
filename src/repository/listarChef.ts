export const SQL_LISTAR = {
    LISTAR_TODOS:"SELECT * FROM chefs che ORDER BY che.idchef ASC",
    LISTAR_ID:"SELECT * FROM chefs che WHERE che.idchef = $1",
    LISTAR_TOTAL: "SELECT COUNT(che.idchef) FROM chefs che",


}

