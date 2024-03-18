export const Crear_Porciones={
    CREAR:"INSERT INTO porciones (nombre_porcion, calorias_porcion, idingrediente, idvino)\
    VALUES ($1, $2, $3, $4) RETURNING idporciones"
}