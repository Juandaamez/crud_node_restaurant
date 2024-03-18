import { Response, Request } from "express";
import { SQL_LISTAR } from "../repository/listarMenusPorciones";
import DAO_Listar from "../daos/DAO_Listar";

class controladorListarMenusPorciones extends DAO_Listar {
  public getMoPe(req: Request, res: Response): void {
    controladorListarMenusPorciones.listarTodosGeneral(SQL_LISTAR.LISTAR_TODOS, [], res);
  }

  public getMoPeid(req: Request, res: Response): void{
    let id: String = req.params.id;
    controladorListarMenusPorciones.listarTodosGeneral(SQL_LISTAR.LISTAR_ID, id, res);
  }

  public getMoPeTotal(req: Request, res: Response):void{
    controladorListarMenusPorciones.listarTodosGeneral(SQL_LISTAR.LISTAR_TOTAL, [], res);
  }
}

const ctrl_listMoPe = new controladorListarMenusPorciones();
export default ctrl_listMoPe;
