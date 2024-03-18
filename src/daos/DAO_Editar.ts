import pool from "../config/conn/connDB";
import { Response } from "express";

class DAO_Editar{

    protected static async actualizar(
        sqlEditar: string,
        parametros: any,
        res: Response
    ): Promise<any>{
        await pool
        .task(async(consulta) =>{
            return await consulta.result(sqlEditar, parametros);
        })

        .then((respuesta)=> {
            res.status(200).json({
                respuesta: "Listo papi, siga... 5.0 el semestre"
            })

        })

        .catch((mierror) => {

        console.log("Error", mierror);
        res.status(400).json({
            respuesta: "SE cayo EL dao"
        })
    });
}
}
export default DAO_Editar;