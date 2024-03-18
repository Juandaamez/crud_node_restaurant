export const SQL_LISTAR = {
    LISTAR_TODOS:"SELECT * FROM ingredientes ing ORDER BY ing.idingrediente ASC",
    LISTAR_ID:"SELECT * FROM ingredientes ing WHERE matri.idingrediente = $1",
    LISTAR_TOTAL: "SELECT COUNT(ing.idingrediente) FROM ingredientes ing",


}

