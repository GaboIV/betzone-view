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
var equipos_service_1 = require("../../servicios/equipos.service");
var servicios_indice_1 = require("../../servicios/servicios.indice");
var generales_service_1 = require("../../servicios/generales.service");
var http_1 = require("@angular/common/http");
var partidos_service_1 = require("../../servicios/partidos.service");
var deportes_service_1 = require("../../servicios/deportes.service");
var PartidosComponent = /** @class */ (function () {
    function PartidosComponent(router, activatedRoute, _equipoService, _nacionalidadesService, _generalesService, _partidosService, _deportesService, http) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._equipoService = _equipoService;
        this._nacionalidadesService = _nacionalidadesService;
        this._generalesService = _generalesService;
        this._partidosService = _partidosService;
        this._deportesService = _deportesService;
        this.http = http;
        this.mostrarEdit = false;
        this.pagina = 1;
        this.desactivar = 'disabled';
        this.ligas = [];
        this.criterio = 'todos';
    }
    PartidosComponent.prototype.ngOnInit = function () {
        this.cargarPartidos(this.pagina, 'todos');
        this.cargarDeportes();
    };
    PartidosComponent.prototype.cargarDeportes = function () {
        var _this = this;
        this._deportesService.cargarDeportes()
            .subscribe(function (deportes) { return _this.deportes = deportes; });
    };
    PartidosComponent.prototype.seleccionDeporte = function (seleccion) {
        var _this = this;
        this.ligas = null;
        this._deportesService.seleccionDeporte(seleccion)
            .subscribe(function (ligas) {
            _this.ligas = ligas;
        });
    };
    PartidosComponent.prototype.seleccionLiga = function (seleccion) {
        var _this = this;
        this.partidos = null;
        this.criterio = '-' + seleccion;
        this._partidosService.cargarPartidos(1, '-' + seleccion)
            .subscribe(function (partidos) { return _this.partidos = partidos; });
    };
    PartidosComponent.prototype.cargarPartidos = function (pagina, criterio) {
        var _this = this;
        this._partidosService.cargarPartidos(pagina, criterio)
            .subscribe(function (partidos) { return _this.partidos = partidos; });
    };
    PartidosComponent.prototype.subirImagen = function (event, partido) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        this._generalesService.subirImagen(partido.id_partido, this.selectedFile, 'partidos')
            .subscribe(function (res) {
            _this.resultado = res;
            console.log(_this.resultado);
            partido.img = _this.resultado.imagen;
        });
    };
    PartidosComponent.prototype.cambiarEstado = function (partido) {
        this._partidosService.actualizarPartido(partido)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    PartidosComponent.prototype.cambiarPagina = function (valor) {
        if (valor === 'a') {
            this.pagina = this.pagina + 1;
            this.cargarPartidos(this.pagina, this.criterio);
            if (this.pagina !== 1) {
                this.desactivar = 'color_grey';
            }
        }
        if (valor === 'b' && this.pagina > 1) {
            this.pagina = this.pagina - 1;
            this.cargarPartidos(this.pagina, this.criterio);
            if (this.pagina === 1) {
                this.desactivar = 'disabled';
            }
        }
    };
    PartidosComponent.prototype.cambiarLive = function (partido) {
        this._partidosService.actualizarPartido(partido)
            .subscribe(function (resp) {
            console.log(resp);
        });
    };
    PartidosComponent = __decorate([
        core_1.Component({
            selector: 'app-partidos',
            templateUrl: './partidos.component.html',
            styleUrls: ['./partidos.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            equipos_service_1.EquiposService,
            servicios_indice_1.NacionalidadesService,
            generales_service_1.GeneralesService,
            partidos_service_1.PartidosService,
            deportes_service_1.DeportesService,
            http_1.HttpClient])
    ], PartidosComponent);
    return PartidosComponent;
}());
exports.PartidosComponent = PartidosComponent;
//# sourceMappingURL=partidos.component.js.map