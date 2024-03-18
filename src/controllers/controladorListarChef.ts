import { Response, Request } from "express";
import { SQL_LISTAR } from "../repository/listarChef";
import DAO_Listar from "../daos/DAO_Listar";

class controladorListarChef extends DAO_Listar {
  public getChef(req: Request, res: Response): void {
    controladorListarChef.listarTodosGeneral(SQL_LISTAR.LISTAR_TODOS, [], res);
  }

  public getChefid(req: Request, res: Response): void{
    let id: String = req.params.id;
    controladorListarChef.listarTodosGeneral(SQL_LISTAR.LISTAR_ID, id, res);
  }

  public getChefTotal(req: Request, res: Response):void{
    controladorListarChef.listarTodosGeneral(SQL_LISTAR.LISTAR_TOTAL, [], res);
  }
}

const ctrl_listChef = new controladorListarChef();
export default ctrl_listChef;
