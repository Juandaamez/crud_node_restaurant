import { SQL_ELIMINAR } from '../repository/elminarMenus';
import { Request, Response } from 'express';
import DAO_Eliminar from "../daos/DAO_Eliminar";



class controladorEliminarMenus extends DAO_Eliminar{

    public deleteMen(req:Request, res:Response){
        const miID = req.params.elID;
        const parametros = [miID];
        controladorEliminarMenus.eliminar(SQL_ELIMINAR.DELETE,parametros, res)
    }
}
const ctrl_EliminarMen = new controladorEliminarMenus();
export default ctrl_EliminarMen;