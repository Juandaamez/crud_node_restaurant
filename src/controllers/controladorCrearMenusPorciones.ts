import { Crear_MenuPorcion } from './../repository/createMenusPorciones';
import { validad_existencia } from '../repository/validadExistencia'
import DAO_Crear from '../daos/DAO_Crear'
import { Request, Response } from 'express'

class controladorCrearMenusPorcion extends DAO_Crear {

    public postMePo(req: Request, res: Response): void {

        const idmenu = req.body.idmenu;
        const idporcion = req.body.idporcion;
        const informacion = [idmenu,idporcion];

        controladorCrearMenusPorcion.crear(Crear_MenuPorcion.CREAR, informacion, res)

    }

}
const ctrl_CrearMepo = new controladorCrearMenusPorcion();
export default ctrl_CrearMepo;