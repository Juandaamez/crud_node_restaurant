export const CrearChef={
    CREAR:"INSERT INTO chefs (cc_cocinero, nombre_cocinero, apellido_cocinero, segundo_apellido, fecha_nacimiento)\
    VALUES ($1, $2, $3, $4, $5) RETURNING idchef"
}