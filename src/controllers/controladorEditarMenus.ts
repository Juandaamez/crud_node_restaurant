import { Request, Response } from "express";
import DAO_Editar from "../daos/DAO_Editar";
import { SQL_EDITAR } from "../repository/editarMenus";

class ControladorActualizarMenus extends DAO_Editar {
    public actualizarMenus(req: Request, res: Response): void {

        const id_menu= req.body.idMenu;
        const codigo_menu = req.body.codigoMenu;
        const nombre_menu = req.body.nombreMenu;
        const precio_menu = req.body.precioMenu;

        const parametro = [codigo_menu, nombre_menu, precio_menu, id_menu];

        ControladorActualizarMenus.actualizar(
            SQL_EDITAR.EDIT, parametro, res
        )
    }
}

const controladorActualizarMenus = new ControladorActualizarMenus();
export default controladorActualizarMenus