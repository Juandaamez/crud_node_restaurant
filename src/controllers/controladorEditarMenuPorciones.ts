import { Request, Response } from "express";
import DAO_Editar from "../daos/DAO_Editar";
import { SQL_EDITAR } from "../repository/editarMenuPorciones";

class ControladorActualizarMenuPorciones extends DAO_Editar {
    public actualizarMePo(req: Request, res: Response): void {

        const idmenu= req.body.idmenu
        const idporcion = req.body.idporcion;

        const parametro = [idporcion, idmenu];

        ControladorActualizarMenuPorciones.actualizar(
            SQL_EDITAR.EDIT, parametro, res
        )
    }
}

const controladorActualizarMePo = new ControladorActualizarMenuPorciones();
export default controladorActualizarMePo