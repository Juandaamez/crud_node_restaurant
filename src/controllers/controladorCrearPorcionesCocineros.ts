import { Crear_PorcionChef } from '../repository/createPorcionesCocineros';
import { validad_existencia } from '../repository/validadExistencia'
import DAO_Crear from '../daos/DAO_Crear'
import { Request, Response } from 'express'

class controladorCrearPorcionesCocineros extends DAO_Crear {

    public postPorche(req: Request, res: Response): void {

        const idporcion = req.body.idporcion;
        const idchef = req.body.idchef;
        const informacion = [idporcion,idchef];

        controladorCrearPorcionesCocineros.crear(Crear_PorcionChef.CREAR, informacion, res)

    }

}
const ctrl_CrearPorche = new controladorCrearPorcionesCocineros();
export default ctrl_CrearPorche;