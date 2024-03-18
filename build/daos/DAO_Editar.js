"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connDB_1 = __importDefault(require("../config/conn/connDB"));
class DAO_Editar {
    static actualizar(sqlEditar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connDB_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                return yield consulta.result(sqlEditar, parametros);
            }))
                .then((respuesta) => {
                res.status(200).json({
                    respuesta: "Listo papi, siga... 5.0 el semestre"
                });
            })
                .catch((mierror) => {
                console.log("Error", mierror);
                res.status(400).json({
                    respuesta: "SE cayo EL dao"
                });
            });
        });
    }
}
exports.default = DAO_Editar;
