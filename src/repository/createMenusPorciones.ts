export const Crear_MenuPorcion={
    CREAR:"INSERT INTO menu_pociones (idmenu, idporcion)\
    VALUES ($1, $2) RETURNING idmenu"
}