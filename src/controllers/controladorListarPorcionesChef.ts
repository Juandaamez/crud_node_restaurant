import { Response, Request } from "express";
import { SQL_LISTAR } from "../repository/listarPorcionesChef";
import DAO_Listar from "../daos/DAO_Listar";

class controladorListarPorcionesChef extends DAO_Listar {
  public getPorChe(req: Request, res: Response): void {
    controladorListarPorcionesChef.listarTodosGeneral(SQL_LISTAR.LISTAR_TODOS, [], res);
  }

  public getPorCheid(req: Request, res: Response): void{
    let id: String = req.params.id;
    controladorListarPorcionesChef.listarTodosGeneral(SQL_LISTAR.LISTAR_ID, id, res);
  }

  public getPorCheTotal(req: Request, res: Response):void{
    controladorListarPorcionesChef.listarTodosGeneral(SQL_LISTAR.LISTAR_TOTAL, [], res);
  }
}

const ctrl_listPorChe = new controladorListarPorcionesChef();
export default ctrl_listPorChe;
