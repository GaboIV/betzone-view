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
var servicios_indice_1 = require("../../servicios/servicios.indice");
var http_1 = require("@angular/common/http");
var generales_service_1 = require("../../servicios/generales.service");
var EquiposComponent = /** @class */ (function () {
    function EquiposComponent(router, activatedRoute, _equipoService, _nacionalidadesService, _generalesService, http) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._equipoService = _equipoService;
        this._nacionalidadesService = _nacionalidadesService;
        this._generalesService = _generalesService;
        this.http = http;
        this.equipos = [];
        this.mostrarEdit = false;
        this.pagina = 1;
        this.desactivar = 'disabled';
        this.liga = 'todas';
    }
    EquiposComponent.prototype.ngOnInit = function () {
        this.cargarEquipos(this.pagina, 'todos', 'todas');
        this.cargarNacionalidades();
    };
    EquiposComponent.prototype.cargarEquipos = function (pagina, criterio, liga) {
        var _this = this;
        this._equipoService.cargarEquipos(pagina, criterio, liga)
            .subscribe(function (equipos) { return _this.equipos = equipos; });
    };
    EquiposComponent.prototype.cargarNacionalidades = function () {
        var _this = this;
        this._nacionalidadesService.cargarNacionalidades()
            .subscribe(function (nacionalidades) { return _this.nacionalidades = nacionalidades; });
    };
    EquiposComponent.prototype.cambiarEdit = function () {
        this.mostrarEdit = true;
    };
    EquiposComponent.prototype.ocultarEdit = function (equipo) {
        console.log(equipo);
        this.mostrarEdit = false;
        this._equipoService.actualizarEquipo(equipo)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    EquiposComponent.prototype.subirImagen = function (event, equipo) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        this._generalesService.subirImagen(equipo.id_equipo, this.selectedFile, 'equipos')
            .subscribe(function (res) {
            _this.resultado = res;
            console.log(_this.resultado);
            equipo.img = _this.resultado.imagen;
        });
    };
    EquiposComponent.prototype.buscarElemento = function (valor) {
        if (valor === '') {
            valor = 'todos';
        }
        this.cargarEquipos(this.pagina, valor, 'todas');
    };
    EquiposComponent.prototype.cambiarPagina = function (valor) {
        if (valor === 'a') {
            this.pagina = this.pagina + 1;
            this.cargarEquipos(this.pagina, 'todos', 'todas');
            if (this.pagina !== 1) {
                this.desactivar = 'color_grey';
            }
        }
        if (valor === 'b' && this.pagina > 1) {
            this.pagina = this.pagina - 1;
            this.cargarEquipos(this.pagina, 'todos', 'todas');
            if (this.pagina === 1) {
                this.desactivar = 'disabled';
            }
        }
    };
    EquiposComponent.prototype.ligaCa = function (liga) {
        this.cargarEquipos(1, 'todos', liga.id_liga);
    };
    EquiposComponent = __decorate([
        core_1.Component({
            selector: 'app-equipos',
            templateUrl: './equipos.component.html',
            styleUrls: ['./equipos.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            servicios_indice_1.EquiposService,
            servicios_indice_1.NacionalidadesService,
            generales_service_1.GeneralesService,
            http_1.HttpClient])
    ], EquiposComponent);
    return EquiposComponent;
}());
exports.EquiposComponent = EquiposComponent;
//# sourceMappingURL=equipos.component.js.map