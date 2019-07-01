"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ligas_service_1 = require("../../servicios/ligas.service");
var deportes_service_1 = require("../../servicios/deportes.service");
var servicios_indice_1 = require("../../servicios/servicios.indice");
var generales_service_1 = require("../../servicios/generales.service");
var http_1 = require("@angular/common/http");
var link_1 = require("../../comun/link");
var ActualizacionesComponent = /** @class */ (function () {
    function ActualizacionesComponent(router, activatedRoute, _ligasService, _deporteService, _nacionalidadesService, _generalesService, http) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._ligasService = _ligasService;
        this._deporteService = _deporteService;
        this._nacionalidadesService = _nacionalidadesService;
        this._generalesService = _generalesService;
        this.http = http;
        this.mostrarEdit = false;
        this.pagina = 1;
        this.desactivar = 'disabled';
        this.mostrar = 0;
    }
    ActualizacionesComponent.prototype.ngOnInit = function () {
        this.cargarActualizaciones();
        this.cargarNacionalidades();
    };
    ActualizacionesComponent.prototype.cargarActualizaciones = function () {
        var _this = this;
        this._ligasService.cargarActualizaciones()
            .subscribe(function (actualizaciones) { return _this.actualizaciones = actualizaciones; });
    };
    ActualizacionesComponent.prototype.cargarNacionalidades = function () {
        var _this = this;
        this._nacionalidadesService.cargarNacionalidades()
            .subscribe(function (nacionalidades) { return _this.nacionalidades = nacionalidades; });
    };
    ActualizacionesComponent.prototype.cambiarMostrar = function (act) {
        if (this.mostrar === 0) {
            this.mostrar = act.id_liga;
        }
        else {
            this.mostrar = 0;
        }
    };
    ActualizacionesComponent.prototype.actualizarPartidos = function (id_liga) {
        this.ventanaCentrada(link_1.URL_A_FUNC + '/encuentros.php?IDE=' + id_liga, '800', '600', 'Popupuno');
    };
    ActualizacionesComponent.prototype.actualizarCuotas = function (id_liga) {
        this.ventanaCentrada(link_1.URL_A_FUNC + '/cuotas.php?IDE=' + id_liga + '&total_parts=0&actual_part=0', '800', '600', 'Popupuno');
    };
    ActualizacionesComponent.prototype.ventanaCentrada = function (pagina, w, h, nombre) {
        console.log('abriendo win');
        var winleft = (screen.width - w) / 2;
        var wintop = (screen.height - h) / 2;
        var caracteristicas = 'height=' + h + ',width=' + w + ',top=' + wintop + ',left=' + winleft;
        var win = window.open(pagina, nombre, caracteristicas);
    };
    ActualizacionesComponent = __decorate([
        core_1.Component({
            selector: 'app-actualizaciones',
            templateUrl: './actualizaciones.component.html',
            styleUrls: ['./actualizaciones.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            ligas_service_1.LigasService,
            deportes_service_1.DeportesService,
            servicios_indice_1.NacionalidadesService,
            generales_service_1.GeneralesService,
            http_1.HttpClient])
    ], ActualizacionesComponent);
    return ActualizacionesComponent;
}());
exports.ActualizacionesComponent = ActualizacionesComponent;
//# sourceMappingURL=actualizaciones.component.js.map