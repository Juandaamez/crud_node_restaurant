
import { CrearChef } from '../repository/createChefs';
import DAO_Crear from '../daos/DAO_Crear'
import { Request, Response } from 'express'

class controladorCrearChef extends DAO_Crear {

    public postChef (req:Request, res:Response):void{

        const cc_cocinero = req.body.ccCocinero;
        const nombre_cocinero = req.body.nombreCocinero;
        const apellido_cocinero = req.body.apellidoCocinero;
        const segundo_apellido = req.body.segundoApellido;
        const fecha_nacimiento = req.body.fechaNacimiento;
        
        

        const informacion = [cc_cocinero,nombre_cocinero, apellido_cocinero, segundo_apellido, fecha_nacimiento];

        controladorCrearChef.crear(CrearChef.CREAR, informacion, res)

    }

}
const ctrl_CrearChef = new controladorCrearChef();
export default ctrl_CrearChef;