"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var servicios_indice_1 = require("./servicios.indice");
var ligas_service_1 = require("./ligas.service");
var deportes_service_1 = require("./deportes.service");
var generales_service_1 = require("./generales.service");
var tipo_apuesta_service_1 = require("./tipo-apuesta.service");
var usuario_service_1 = require("./usuario.service");
var caballos_service_1 = require("./caballos.service");
var ServiciosModulo = /** @class */ (function () {
    function ServiciosModulo() {
    }
    ServiciosModulo = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule
            ],
            providers: [
                servicios_indice_1.EquiposService,
                ligas_service_1.LigasService,
                servicios_indice_1.NacionalidadesService,
                deportes_service_1.DeportesService,
                tipo_apuesta_service_1.TipoApuestaService,
                generales_service_1.GeneralesService,
                usuario_service_1.UsuarioService,
                caballos_service_1.CaballosService
            ],
            declarations: []
        })
    ], ServiciosModulo);
    return ServiciosModulo;
}());
exports.ServiciosModulo = ServiciosModulo;
//# sourceMappingURL=servicios.modulo.js.map