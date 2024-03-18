import { SQL_ELIMINAR } from '../repository/eliminarPorciones';
import { Request, Response } from 'express';
import DAO_Eliminar from "../daos/DAO_Eliminar";



class controladorEliminarPorciones extends DAO_Eliminar{

    public deletePor(req:Request, res:Response){
        const miID = req.params.elID;
        const parametros = [miID];
        controladorEliminarPorciones.eliminar(SQL_ELIMINAR.DELETE,parametros, res)
    }
}
const ctrl_EliminarPor = new controladorEliminarPorciones();
export default ctrl_EliminarPor;