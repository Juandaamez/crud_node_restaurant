import { Router } from "express";
import ctrl_CrearChef from "../controllers/controladorCrearChefs";
import ctrl_CrearIng from "../controllers/controladorCrearIngredientes";
import ctrl_CrearMen from "../controllers/controladorCrearMenus";
import ctrl_CrearMepo from "../controllers/controladorCrearMenusPorciones";
import ctrl_CrearPor from "../controllers/controladorCrearPorciones";
import ctrl_CrearPorche from "../controllers/controladorCrearPorcionesCocineros";
import ctrl_CrearVin from "../controllers/controladorCrearVinos";
import controladorActualizarChefs from "../controllers/controladorEditarChefs";
import controladorActualizarIngredientes from "../controllers/controladorEditarIngredientes";
import controladorActualizarMePo from "../controllers/controladorEditarMenuPorciones";
import controladorActualizarMenus from "../controllers/controladorEditarMenus";
import controladorActualizarPorciones from "../controllers/controladorEditarPorciones";
import controladorActualizarPorcionesCocineros from "../controllers/controladorEditarPorcionesCocineros";
import controladorActualizarVinos from "../controllers/controladorEditarVinos";
import ctrl_EliminarChef from "../controllers/controladorEliminarChef";
import ctrl_EliminarIng from "../controllers/controladorEliminarIngredientes";
import ctrl_EliminarMePo from "../controllers/controladorEliminarMenuPorciones";
import ctrl_EliminarMen from "../controllers/controladorEliminarMenus";
import ctrl_EliminarPor from "../controllers/controladorEliminarPorciones";
import ctrl_EliminarPorChe from "../controllers/controladorEliminarPorcionesChef";
import ctrl_EliminarVin from "../controllers/controladorEliminarVinos";
import ctrl_listChef from "../controllers/controladorListarChef";
import ctrl_listIng from "../controllers/controladorListarIngredientes";
import ctrl_listMen from "../controllers/controladorListarMenus";
import ctrl_listMoPe from "../controllers/controladorListarMenusPorciones";
import ctrl_listPor from "../controllers/controladorListarPorciones";
import ctrl_listPorChe from "../controllers/controladorListarPorcionesChef";
import ctrl_listVinos from "../controllers/controladorListarVinos";



class Rutas {
  public rutasAPI: Router;

  constructor() {
    this.rutasAPI = Router();
    this.config();
  }

  public config() {
    this.rutas();
  }
  public rutas() {
    //Menus
    this.rutasAPI.get("/listar_menu", ctrl_listMen.getMenus);
    this.rutasAPI.get("/menusTotal", ctrl_listMen.getMenusTotal);
    this.rutasAPI.delete("/EliminarMenu/:elID", ctrl_EliminarMen.deleteMen);
    this.rutasAPI.post("/crearMenu", ctrl_CrearMen.postMen);
    this.rutasAPI.put("/actualizarMen", controladorActualizarMenus.actualizarMenus);

    //Ingredientes
    this.rutasAPI.get("/listar_ingredientes", ctrl_listIng.getIngredientes);
    this.rutasAPI.get("/mingredientesTotal", ctrl_listIng.getIngredientesTotal);
    this.rutasAPI.delete("/Eliminaringredientes/:elID", ctrl_EliminarIng.deleteingredientes);
    this.rutasAPI.post("/crearingredientes", ctrl_CrearIng.postIngredientes);
    this.rutasAPI.put("/actualizariNG", controladorActualizarIngredientes.actualizarIngredientes);

    //Vinos
    this.rutasAPI.get("/listar_vinos", ctrl_listVinos.getVinos);
    this.rutasAPI.get("/vinosTotal", ctrl_listVinos.getVinosTotal);
    this.rutasAPI.delete("/EliminarVinos/:elID", ctrl_EliminarVin.deleteVin);
    this.rutasAPI.post("/crearVinos", ctrl_CrearVin.postVinos);
    this.rutasAPI.put("/actualizarVino", controladorActualizarVinos.actualizarVinos);

    //Chefs
    this.rutasAPI.get("/listar_chef", ctrl_listChef.getChef);
    this.rutasAPI.get("/chefTotal", ctrl_listChef.getChefTotal);
    this.rutasAPI.delete("/EliminarChef/:elID", ctrl_EliminarChef.deleteChef);
    this.rutasAPI.post("/crearChef", ctrl_CrearChef.postChef);
    this.rutasAPI.put("/actualizarChef", controladorActualizarChefs.actualizarChefs);

    //Porciones
    this.rutasAPI.get("/listar_porciones", ctrl_listPor.getPor);
    this.rutasAPI.get("/porciones/:id", ctrl_listPor.getPorid);
    this.rutasAPI.get("/porTotal", ctrl_listPor.getPorTotal);
    this.rutasAPI.delete("/EliminarPorciones/:elID", ctrl_EliminarPor.deletePor);
    this.rutasAPI.post("/crearPorciones", ctrl_CrearPor.postPor);
    this.rutasAPI.put("/actualizarPorciones", controladorActualizarPorciones.actualizarPorciones);

    //Porciones_Chef
    this.rutasAPI.get("/listar_porChe", ctrl_listPorChe.getPorChe);
    this.rutasAPI.get("/porChe/:id", ctrl_listPorChe.getPorCheid);
    this.rutasAPI.get("/porCheTotal", ctrl_listPorChe.getPorCheTotal);
    this.rutasAPI.delete("/EliminarPorChe/:elID", ctrl_EliminarPorChe.deletePorChe);
    this.rutasAPI.post("/crearPorChe", ctrl_CrearPorche.postPorche);
    this.rutasAPI.put("/actualizarPorChe", controladorActualizarPorcionesCocineros.actualizarPorcionesCocineros);

    //Menus_Porciones
    this.rutasAPI.get("/listar_mepo", ctrl_listMoPe.getMoPe);
    this.rutasAPI.get("/listar_mepo/:id", ctrl_listMoPe.getMoPeid);
    this.rutasAPI.get("/mepoTotal", ctrl_listMoPe.getMoPeTotal);
    this.rutasAPI.delete("/Eliminarmepo/:elID", ctrl_EliminarMePo.deleteMePo);
    this.rutasAPI.post("/crearmepo", ctrl_CrearMepo.postMePo);
    this.rutasAPI.put("/actualizarmepo", controladorActualizarMePo.actualizarMePo);

  }

}

const rutas = new Rutas();
export default rutas.rutasAPI;
