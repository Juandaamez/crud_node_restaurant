import { SQL_ELIMINAR } from '../repository/elminarChef';
import { Request, Response } from 'express';
import DAO_Eliminar from "../daos/DAO_Eliminar";



class controladorEliminarChef extends DAO_Eliminar{

    public deleteChef(req:Request, res:Response){
        const miID = req.params.elID;
        const parametros = [miID];
        controladorEliminarChef.eliminar(SQL_ELIMINAR.DELETE,parametros, res)
    }
}
const ctrl_EliminarChef = new controladorEliminarChef();
export default ctrl_EliminarChef;