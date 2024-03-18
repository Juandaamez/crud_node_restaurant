
import { CrearMatri } from '../repository/createIngredientes';
import {validad_existencia} from '../repository/validadExistencia'
import DAO_Crear from '../daos/DAO_Crear'
import { Request, Response } from 'express'

class controladorCrearIngredientes extends DAO_Crear {

    public postIngredientes (req:Request, res:Response):void{

        const nombre_ingrediente = req.body.nombre_ingrediente;
        const precio_ingrediente = req.body.precio_ingrediente;
        const calorias_ingrediente = req.body.calorias_ingrediente;
        const descripcion_ingrediente = req.body.descripcion_ingrediente;
        const existencias_ingrediente = req.body.existencias_ingrediente;
        

        const informacion = [nombre_ingrediente,precio_ingrediente,calorias_ingrediente, descripcion_ingrediente, existencias_ingrediente];

        controladorCrearIngredientes.crear(CrearMatri.CREAR, informacion, res)

    }

}
const ctrl_CrearIng = new controladorCrearIngredientes();
export default ctrl_CrearIng;