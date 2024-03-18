import { Response, Request } from "express";
import { SQL_LISTAR } from "../repository/listarPorciones";
import DAO_Listar from "../daos/DAO_Listar";

class controladorListarPorciones extends DAO_Listar {
  public getPor(req: Request, res: Response): void {
    controladorListarPorciones.listarTodosGeneral(SQL_LISTAR.LISTAR_TODOS, [], res);
  }

  public getPorid(req: Request, res: Response): void{
    let id: String = req.params.id;
    controladorListarPorciones.listarTodosGeneral(SQL_LISTAR.LISTAR_ID, id, res);
  }

  public getPorTotal(req: Request, res: Response):void{
    controladorListarPorciones.listarTodosGeneral(SQL_LISTAR.LISTAR_TOTAL, [], res);
  }
}

const ctrl_listPor = new controladorListarPorciones();
export default ctrl_listPor;
