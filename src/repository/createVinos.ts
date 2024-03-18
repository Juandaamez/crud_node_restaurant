export const Crear_Vino={
    CREAR:"INSERT INTO vinos (nombre_vino, fecha_vino, tipo_vino)\
    VALUES ($1, $2, $3) RETURNING idvino"
}

