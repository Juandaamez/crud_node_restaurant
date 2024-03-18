import { Response, Request } from "express";
import { SQL_LISTAR } from "../repository/listarIngredientes";
import DAO_Listar from "../daos/DAO_Listar";

class controladorListarIngrdientes extends DAO_Listar {
  public getIngredientes(req: Request, res: Response): void {
    controladorListarIngrdientes.listarTodosGeneral(SQL_LISTAR.LISTAR_TODOS, [], res);
  }

  public getEIngredientesid(req: Request, res: Response): void{
    let id: String = req.params.id;
    controladorListarIngrdientes.listarTodosGeneral(SQL_LISTAR.LISTAR_ID, id, res);
  }

  public getIngredientesTotal(req: Request, res: Response):void{
    controladorListarIngrdientes.listarTodosGeneral(SQL_LISTAR.LISTAR_TOTAL, [], res);
  }
}

const ctrl_listIng = new controladorListarIngrdientes();
export default ctrl_listIng;
