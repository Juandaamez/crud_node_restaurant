import { SQL_ELIMINAR } from '../repository/eliminarPorcionesChefs';
import { Request, Response } from 'express';
import DAO_Eliminar from "../daos/DAO_Eliminar";



class controladorEliminarPorcionesChefs extends DAO_Eliminar{

    public deletePorChe(req:Request, res:Response){
        const miID = req.params.elID;
        const parametros = [miID];
        controladorEliminarPorcionesChefs.eliminar(SQL_ELIMINAR.DELETE,parametros, res)
    }
}
const ctrl_EliminarPorChe = new controladorEliminarPorcionesChefs();
export default ctrl_EliminarPorChe;