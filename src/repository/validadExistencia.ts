export const validad_existencia ={
    VALIDAR_INGREDIENTES: "SELECT COUNT (ing.idingrediente) AS cantidad FROM ingredientes ing WHERE LOWER (ing.nombre_ingrediente)=LOWER($1)", 
    VALIDAR_MENUS: "SELECT COUNT (men.id_menu) AS cantidad FROM menu men WHERE LOWER (men.nombre_menu)=LOWER($1)",
    VALIDAR_VINOS: "SELECT COUNT (vin.idvino) AS cantidad FROM vinos vin WHERE LOWER (vin.tipo_vino)=LOWER($1)",
    VALIDAR_CHEF: "SELECT COUNT (che.idchef) AS cantidad FROM chefs che WHERE LOWER (che.nombre_cocinero)=LOWER($1)",
    VALIDAR_PORCIONES: "SELECT COUNT (por.idporciones) AS cantidad FROM porciones por WHERE LOWER (por.nombre_porcion)=LOWER($1)",
    VALIDAR_MENUS_PORCIONES: "SELECT COUNT (mp.idmenu) AS cantidad FROM menus_porciones mp WHERE LOWER (mp.idporcion)=LOWER($1)"
}