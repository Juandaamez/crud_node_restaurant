import { SQL_ELIMINAR } from '../repository/eliminarMenuPorciones';
import { Request, Response } from 'express';
import DAO_Eliminar from "../daos/DAO_Eliminar";



class controladorEliminarMenuPorciones extends DAO_Eliminar{

    public deleteMePo(req:Request, res:Response){
        const miID = req.params.elID;
        const parametros = [miID];
        controladorEliminarMenuPorciones.eliminar(SQL_ELIMINAR.DELETE,parametros, res)
    }
}
const ctrl_EliminarMePo = new controladorEliminarMenuPorciones();
export default ctrl_EliminarMePo;