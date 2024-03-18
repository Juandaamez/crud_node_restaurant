import { Response, Request } from "express";
import { SQL_LISTAR } from "../repository/listarMenus";
import DAO_Listar from "../daos/DAO_Listar";

class controladorListarMenus extends DAO_Listar {
  public getMenus(req: Request, res: Response): void {
    controladorListarMenus.listarTodosGeneral(SQL_LISTAR.LISTAR_TODOS, [], res);
  }

  public getMenusid(req: Request, res: Response): void{
    let id: String = req.params.id;
    controladorListarMenus.listarTodosGeneral(SQL_LISTAR.LISTAR_ID, id, res);
  }

  public getMenusTotal(req: Request, res: Response):void{
    controladorListarMenus.listarTodosGeneral(SQL_LISTAR.LISTAR_TOTAL, [], res);
  }
}

const ctrl_listMen = new controladorListarMenus();
export default ctrl_listMen;
