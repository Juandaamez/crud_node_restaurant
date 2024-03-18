import { SQL_ELIMINAR } from '../repository/elminarIngredientes';
import { Request, Response } from 'express';
import DAO_Eliminar from "../daos/DAO_Eliminar";



class controladorEliminarIngredientes extends DAO_Eliminar{

    public deleteingredientes(req:Request, res:Response){
        const miID = req.params.elID;
        const parametros = [miID];
        controladorEliminarIngredientes.eliminar(SQL_ELIMINAR.DELETE,parametros, res)
    }
}
const ctrl_EliminarIng = new controladorEliminarIngredientes();
export default ctrl_EliminarIng;