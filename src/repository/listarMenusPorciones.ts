export const SQL_LISTAR = {
    LISTAR_TODOS:"SELECT * FROM menu_pociones mp ORDER BY mp.idmenu ASC",
    LISTAR_ID:"SELECT * FROM menu_pociones mp WHERE mp.idmenu = $1",
    LISTAR_TOTAL: "SELECT COUNT(mp.idmenu) FROM menu_pociones mp",
}

