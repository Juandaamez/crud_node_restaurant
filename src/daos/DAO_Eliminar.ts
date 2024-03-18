
import { Response } from "express";
import pool from "../config/conn/connDB";

class DAO_Eliminar {
  protected static async eliminar(
    sql_Eliminar: string,
    parametros: any,
    res: Response
  ):Promise<any> {
    pool.result(sql_Eliminar,parametros).then((resultado)=>{
        res.status(200).json({mensaje:"Eliminado con exito", resultado:resultado.rowCount,
    });
    }
    ).catch((miError)=>{
        console.log("Error de conexion", miError);
        res.status(400).json({
        respuesta:"Error al eliminar"
        });
    })
  }
}
export default DAO_Eliminar;
