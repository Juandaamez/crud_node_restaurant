import { Request, Response } from "express";
import DAO_Editar from "../daos/DAO_Editar";
import { SQL_EDITAR } from "../repository/editarChef";

class ControladorActualizarChefs extends DAO_Editar {
    public actualizarChefs(req: Request, res: Response): void {

        const idchef= req.body.idchef
        const cc_cocinero = req.body.ccCocinero;
        const nombre_cocinero = req.body.nombreCocinero;
        const apellido_cocinero = req.body.apellidoCocinero;
        const segundo_apellido = req.body.segundoApellido;
        const fecha_nacimiento = req.body.fechaNacimiento;

        const parametro = [cc_cocinero, nombre_cocinero, apellido_cocinero, segundo_apellido, fecha_nacimiento,  idchef];

        ControladorActualizarChefs.actualizar(
            SQL_EDITAR.EDIT, parametro, res
        )
    }
}

const controladorActualizarChefs = new ControladorActualizarChefs();
export default controladorActualizarChefs