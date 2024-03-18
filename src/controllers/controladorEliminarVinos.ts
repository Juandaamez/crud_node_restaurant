import { SQL_ELIMINAR } from '../repository/elimarVinos';
import { Request, Response } from 'express';
import DAO_Eliminar from "../daos/DAO_Eliminar";



class controladorEliminarVinos extends DAO_Eliminar{

    public deleteVin(req:Request, res:Response){
        const miID = req.params.elID;
        const parametros = [miID];
        controladorEliminarVinos.eliminar(SQL_ELIMINAR.DELETE,parametros, res)
    }
}
const ctrl_EliminarVin = new controladorEliminarVinos();
export default ctrl_EliminarVin;