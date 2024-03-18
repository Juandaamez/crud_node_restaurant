export const CrearMatri={
    CREAR:"INSERT INTO ingredientes (nombre_ingrediente, precio_ingrediente, calorias_ingrediente, descripcion_ingrediente, existencias_ingrediente)\
    VALUES ($1, $2, $3, $4, $5) RETURNING idingrediente"
}