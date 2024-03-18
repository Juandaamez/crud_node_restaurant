"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controladorCrearChefs_1 = __importDefault(require("../controllers/controladorCrearChefs"));
const controladorCrearIngredientes_1 = __importDefault(require("../controllers/controladorCrearIngredientes"));
const controladorCrearMenus_1 = __importDefault(require("../controllers/controladorCrearMenus"));
const controladorCrearMenusPorciones_1 = __importDefault(require("../controllers/controladorCrearMenusPorciones"));
const controladorCrearPorciones_1 = __importDefault(require("../controllers/controladorCrearPorciones"));
const controladorCrearPorcionesCocineros_1 = __importDefault(require("../controllers/controladorCrearPorcionesCocineros"));
const controladorCrearVinos_1 = __importDefault(require("../controllers/controladorCrearVinos"));
const controladorEditarChefs_1 = __importDefault(require("../controllers/controladorEditarChefs"));
const controladorEditarIngredientes_1 = __importDefault(require("../controllers/controladorEditarIngredientes"));
const controladorEditarMenuPorciones_1 = __importDefault(require("../controllers/controladorEditarMenuPorciones"));
const controladorEditarMenus_1 = __importDefault(require("../controllers/controladorEditarMenus"));
const controladorEditarPorciones_1 = __importDefault(require("../controllers/controladorEditarPorciones"));
const controladorEditarPorcionesCocineros_1 = __importDefault(require("../controllers/controladorEditarPorcionesCocineros"));
const controladorEditarVinos_1 = __importDefault(require("../controllers/controladorEditarVinos"));
const controladorEliminarChef_1 = __importDefault(require("../controllers/controladorEliminarChef"));
const controladorEliminarIngredientes_1 = __importDefault(require("../controllers/controladorEliminarIngredientes"));
const controladorEliminarMenuPorciones_1 = __importDefault(require("../controllers/controladorEliminarMenuPorciones"));
const controladorEliminarMenus_1 = __importDefault(require("../controllers/controladorEliminarMenus"));
const controladorEliminarPorciones_1 = __importDefault(require("../controllers/controladorEliminarPorciones"));
const controladorEliminarPorcionesChef_1 = __importDefault(require("../controllers/controladorEliminarPorcionesChef"));
const controladorEliminarVinos_1 = __importDefault(require("../controllers/controladorEliminarVinos"));
const controladorListarChef_1 = __importDefault(require("../controllers/controladorListarChef"));
const controladorListarIngredientes_1 = __importDefault(require("../controllers/controladorListarIngredientes"));
const controladorListarMenus_1 = __importDefault(require("../controllers/controladorListarMenus"));
const controladorListarMenusPorciones_1 = __importDefault(require("../controllers/controladorListarMenusPorciones"));
const controladorListarPorciones_1 = __importDefault(require("../controllers/controladorListarPorciones"));
const controladorListarPorcionesChef_1 = __importDefault(require("../controllers/controladorListarPorcionesChef"));
const controladorListarVinos_1 = __importDefault(require("../controllers/controladorListarVinos"));
class Rutas {
    constructor() {
        this.rutasAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutas();
    }
    rutas() {
        //Menus
        this.rutasAPI.get("/listar_menu", controladorListarMenus_1.default.getMenus);
        this.rutasAPI.get("/menusTotal", controladorListarMenus_1.default.getMenusTotal);
        this.rutasAPI.delete("/EliminarMenu/:elID", controladorEliminarMenus_1.default.deleteMen);
        this.rutasAPI.post("/crearMenu", controladorCrearMenus_1.default.postMen);
        this.rutasAPI.put("/actualizarMen", controladorEditarMenus_1.default.actualizarMenus);
        //Ingredientes
        this.rutasAPI.get("/listar_ingredientes", controladorListarIngredientes_1.default.getIngredientes);
        this.rutasAPI.get("/mingredientesTotal", controladorListarIngredientes_1.default.getIngredientesTotal);
        this.rutasAPI.delete("/Eliminaringredientes/:elID", controladorEliminarIngredientes_1.default.deleteingredientes);
        this.rutasAPI.post("/crearingredientes", controladorCrearIngredientes_1.default.postIngredientes);
        this.rutasAPI.put("/actualizariNG", controladorEditarIngredientes_1.default.actualizarIngredientes);
        //Vinos
        this.rutasAPI.get("/listar_vinos", controladorListarVinos_1.default.getVinos);
        this.rutasAPI.get("/vinosTotal", controladorListarVinos_1.default.getVinosTotal);
        this.rutasAPI.delete("/EliminarVinos/:elID", controladorEliminarVinos_1.default.deleteVin);
        this.rutasAPI.post("/crearVinos", controladorCrearVinos_1.default.postVinos);
        this.rutasAPI.put("/actualizarVino", controladorEditarVinos_1.default.actualizarVinos);
        //Chefs
        this.rutasAPI.get("/listar_chef", controladorListarChef_1.default.getChef);
        this.rutasAPI.get("/chefTotal", controladorListarChef_1.default.getChefTotal);
        this.rutasAPI.delete("/EliminarChef/:elID", controladorEliminarChef_1.default.deleteChef);
        this.rutasAPI.post("/crearChef", controladorCrearChefs_1.default.postChef);
        this.rutasAPI.put("/actualizarChef", controladorEditarChefs_1.default.actualizarChefs);
        //Porciones
        this.rutasAPI.get("/listar_porciones", controladorListarPorciones_1.default.getPor);
        this.rutasAPI.get("/porciones/:id", controladorListarPorciones_1.default.getPorid);
        this.rutasAPI.get("/porTotal", controladorListarPorciones_1.default.getPorTotal);
        this.rutasAPI.delete("/EliminarPorciones/:elID", controladorEliminarPorciones_1.default.deletePor);
        this.rutasAPI.post("/crearPorciones", controladorCrearPorciones_1.default.postPor);
        this.rutasAPI.put("/actualizarPorciones", controladorEditarPorciones_1.default.actualizarPorciones);
        //Porciones_Chef
        this.rutasAPI.get("/listar_porChe", controladorListarPorcionesChef_1.default.getPorChe);
        this.rutasAPI.get("/porChe/:id", controladorListarPorcionesChef_1.default.getPorCheid);
        this.rutasAPI.get("/porCheTotal", controladorListarPorcionesChef_1.default.getPorCheTotal);
        this.rutasAPI.delete("/EliminarPorChe/:elID", controladorEliminarPorcionesChef_1.default.deletePorChe);
        this.rutasAPI.post("/crearPorChe", controladorCrearPorcionesCocineros_1.default.postPorche);
        this.rutasAPI.put("/actualizarPorChe", controladorEditarPorcionesCocineros_1.default.actualizarPorcionesCocineros);
        //Menus_Porciones
        this.rutasAPI.get("/listar_mepo", controladorListarMenusPorciones_1.default.getMoPe);
        this.rutasAPI.get("/listar_mepo/:id", controladorListarMenusPorciones_1.default.getMoPeid);
        this.rutasAPI.get("/mepoTotal", controladorListarMenusPorciones_1.default.getMoPeTotal);
        this.rutasAPI.delete("/Eliminarmepo/:elID", controladorEliminarMenuPorciones_1.default.deleteMePo);
        this.rutasAPI.post("/crearmepo", controladorCrearMenusPorciones_1.default.postMePo);
        this.rutasAPI.put("/actualizarmepo", controladorEditarMenuPorciones_1.default.actualizarMePo);
    }
}
const rutas = new Rutas();
exports.default = rutas.rutasAPI;
