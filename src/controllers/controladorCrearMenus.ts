import { Crear_Menus } from '../repository/createMenus';
import { validad_existencia } from '../repository/validadExistencia'
import DAO_Crear from '../daos/DAO_Crear'
import { Request, Response } from 'express'

class controladorCrearMenus extends DAO_Crear {

    public postMen(req: Request, res: Response): void {

        const codigo_menu = req.body.codigo_menu;
        const nombre_menu = req.body.nombre_menu;
        const precio_menu = req.body.precio_menu;

        const informacion = [codigo_menu, nombre_menu, precio_menu];

        controladorCrearMenus.crear(Crear_Menus.CREAR, informacion, res)

    }

}
const ctrl_CrearMen = new controladorCrearMenus();
export default ctrl_CrearMen;