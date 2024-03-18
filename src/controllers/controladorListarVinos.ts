import { Response, Request } from "express";
import { SQL_LISTAR } from "../repository/listarVinos";
import DAO_Listar from "../daos/DAO_Listar";

class controladorListarVinos extends DAO_Listar {
  public getVinos(req: Request, res: Response): void {
    controladorListarVinos.listarTodosGeneral(SQL_LISTAR.LISTAR_TODOS, [], res);
  }

  public getVinosid(req: Request, res: Response): void{
    let id: String = req.params.id;
    controladorListarVinos.listarTodosGeneral(SQL_LISTAR.LISTAR_ID, id, res);
  }

  public getVinosTotal(req: Request, res: Response):void{
    controladorListarVinos.listarTodosGeneral(SQL_LISTAR.LISTAR_TOTAL, [], res);
  }
}

const ctrl_listVinos = new controladorListarVinos();
export default ctrl_listVinos;
