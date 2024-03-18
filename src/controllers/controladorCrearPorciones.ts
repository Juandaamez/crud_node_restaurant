import { Crear_Porciones } from '../repository/createPorciones';
import { validad_existencia } from '../repository/validadExistencia'
import DAO_Crear from '../daos/DAO_Crear'
import { Request, Response } from 'express'

class controladorCrearPorciones extends DAO_Crear {

    public postPor(req: Request, res: Response): void {

        const nombre_porcion = req.body.nombre_porcion;
        const calorias_porcion = req.body.calorias_porcion;
        const idingrediente = req.body.idingrediente;
        const idvino = req.body.idvino;

        const informacion = [nombre_porcion, calorias_porcion, idingrediente, idvino];

        controladorCrearPorciones.crear(Crear_Porciones.CREAR, informacion, res)

    }

}
const ctrl_CrearPor = new controladorCrearPorciones();
export default ctrl_CrearPor;