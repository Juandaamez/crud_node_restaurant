export const Crear_Menus={
    CREAR:"INSERT INTO menu (codigo_menu, nombre_menu, precio_menu)\
    VALUES ($1, $2, $3) RETURNING id_menu"
}