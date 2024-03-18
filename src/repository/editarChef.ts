export const SQL_EDITAR = {
    EDIT:
    "UPDATE chefs SET cc_cocinero = $1, nombre_cocinero = $2, apellido_cocinero = $3,\
    segundo_apellido = $4, fecha_nacimiento = $5\
     WHERE idchef = $6"
}