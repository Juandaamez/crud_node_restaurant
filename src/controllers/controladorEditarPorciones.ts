import { Request, Response } from "express";
import DAO_Editar from "../daos/DAO_Editar";
import { SQL_EDITAR } from "../repository/editarPorciones";

class ControladorActualizarPorciones extends DAO_Editar {
    public actualizarPorciones(req: Request, res: Response): void {

        const idporciones= req.body.idporciones
        const nombre_porcion = req.body.nombre_porcion;
        const calorias_porcion = req.body.calorias_porcion;
        const idingrediente = req.body.idingrediente;
        const idvino = req.body.idvino;

        const parametro = [nombre_porcion, calorias_porcion, idingrediente, idvino, idporciones];

        ControladorActualizarPorciones.actualizar(
            SQL_EDITAR.EDIT, parametro, res
        )
    }
}

const controladorActualizarPorciones = new ControladorActualizarPorciones();
export default controladorActualizarPorciones