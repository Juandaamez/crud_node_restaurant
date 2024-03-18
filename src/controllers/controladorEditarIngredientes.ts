import { Request, Response } from "express";
import DAO_Editar from "../daos/DAO_Editar";
import { SQL_EDITAR } from "../repository/editarIngredientes";

class ControladorActualizarIngredientes extends DAO_Editar {
    public actualizarIngredientes(req: Request, res: Response): void {

        const idingrediente = req.body.idingrediente
        const nombre_ingrediente = req.body.nombre_ingrediente;
        const precio_ingrediente = req.body.precio_ingrediente;
        const calorias_ingrediente = req.body.calorias_ingrediente;
        const descripcion_ingrediente = req.body.descripcion_ingrediente
        const existencias_ingrediente = req.body.existencias_ingrediente

        const parametro = [nombre_ingrediente, precio_ingrediente, calorias_ingrediente,
             descripcion_ingrediente, existencias_ingrediente, idingrediente];

        ControladorActualizarIngredientes.actualizar(
            SQL_EDITAR.EDIT, parametro, res
        )
    }
}

const controladorActualizarIngredientes = new ControladorActualizarIngredientes();
export default controladorActualizarIngredientes