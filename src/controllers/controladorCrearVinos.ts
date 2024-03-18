import { Crear_Vino} from '../repository/createVinos';
import DAO_Crear from '../daos/DAO_Crear'
import { Request, Response } from 'express'

class controladorCrearVinos extends DAO_Crear {

    public postVinos (req:Request, res:Response):void{

        const nombre_vino = req.body.nombreVino;
        const tipo_vino = req.body.tipoVino;
        const fecha_vino = req.body.fechaVino;

        const informacion = [nombre_vino, fecha_vino, tipo_vino];

        controladorCrearVinos.crear(Crear_Vino.CREAR, informacion,res)

    }

}
const ctrl_CrearVin = new controladorCrearVinos();
export default ctrl_CrearVin;