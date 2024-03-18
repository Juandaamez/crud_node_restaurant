import { Request, Response } from "express";
import DAO_Editar from "../daos/DAO_Editar";
import { SQL_EDITAR } from "../repository/editarVinos";

class ControladorActualizarVinos extends DAO_Editar {
    public actualizarVinos(req: Request, res: Response): void {

        const idvino= req.body.idvino
        const tipo_vino = req.body.tipo_vino;
        const nombre_vino = req.body.nombre_vino;
        const fecha_vino = req.body.fecha_vino;

        const parametro = [tipo_vino, nombre_vino, fecha_vino, idvino];

        ControladorActualizarVinos.actualizar(
            SQL_EDITAR.EDIT, parametro, res
        )
    }
}

const controladorActualizarVinos = new ControladorActualizarVinos();
export default controladorActualizarVinos