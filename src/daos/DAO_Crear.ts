import { Response } from "express";
import pool from "../config/conn/connDB";

class DAO_Crear {
  protected static async crear(
    sql_crear: string,
    paramentros: any,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consulta) => {
        return await consulta.one(sql_crear, paramentros);
      })
      .then((resultado) => {
        res
          .status(200)
          .json({ respuesta: "Añadido", nuevoCodigo: resultado.idchef });
      })
      .catch((miError) => {
        console.log("Error de conexion", miError);
        res.status(418).json({ respuesta: "Error añadiendo, toca revisar" });
      });
  }
}
export default DAO_Crear;
 