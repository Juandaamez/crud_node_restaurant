import { Request, Response } from "express";
import DAO_Editar from "../daos/DAO_Editar";
import { SQL_EDITAR } from "../repository/editarPorcionesCocineros";

class ControladorActualizarPorcionesCocineros extends DAO_Editar {
    public actualizarPorcionesCocineros(req: Request, res: Response): void {

        const idporcion= req.body.idporcion
        const idchef = req.body.idchef;

        const parametro = [idchef, idporcion];

        ControladorActualizarPorcionesCocineros.actualizar(
            SQL_EDITAR.EDIT, parametro, res
        )
    }
}

const controladorActualizarPorcionesCocineros = new ControladorActualizarPorcionesCocineros();
export default controladorActualizarPorcionesCocineros