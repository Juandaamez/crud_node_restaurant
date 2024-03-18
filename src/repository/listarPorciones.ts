export const SQL_LISTAR = {
    LISTAR_TODOS:"SELECT * FROM porciones por ORDER BY por.idporciones ASC",
    LISTAR_ID:"SELECT * FROM porciones por WHERE por.idporciones = $1",
    LISTAR_TOTAL: "SELECT COUNT(por.idporciones) FROM porciones por",
}

