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
var servicios_indice_1 = require("../../servicios/servicios.indice");
var http_1 = require("@angular/common/http");
var deportes_service_1 = require("../../servicios/deportes.service");
var generales_service_1 = require("../../servicios/generales.service");
var LigasComponent = /** @class */ (function () {
    function LigasComponent(router, activatedRoute, _ligasService, _deporteService, _nacionalidadesService, _generalesService, http) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._ligasService = _ligasService;
        this._deporteService = _deporteService;
        this._nacionalidadesService = _nacionalidadesService;
        this._generalesService = _generalesService;
        this.http = http;
        this.ligas = [];
        this.mostrarEdit = false;
        this.pagina = 1;
        this.liguias = [];
        this.desactivar = 'disabled';
    }
    LigasComponent.prototype.ngOnInit = function () {
        this.ligas = JSON.parse(localStorage.getItem('ligas'));
        this.cargarLigas(this.pagina, 'todas');
        this.cargarNacionalidades();
        this.cargarDeportes();
    };
    LigasComponent.prototype.cargarLigas = function (pagina, criterio) {
        var _this = this;
        this._ligasService.cargarLigas(pagina, criterio)
            .subscribe(function (ligas) {
            _this.ligas = ligas;
            localStorage.setItem('ligas', JSON.stringify(ligas));
        });
    };
    LigasComponent.prototype.cargarNacionalidades = function () {
        var _this = this;
        this._nacionalidadesService.cargarNacionalidades()
            .subscribe(function (nacionalidades) { return _this.nacionalidades = nacionalidades; });
    };
    LigasComponent.prototype.cargarDeportes = function () {
        var _this = this;
        this._deporteService.cargarDeportes()
            .subscribe(function (deportes) { return _this.deportes = deportes; });
    };
    LigasComponent.prototype.cambiarEdit = function () {
        this.mostrarEdit = true;
    };
    LigasComponent.prototype.ocultarEdit = function (liga) {
        console.log(liga);
        this.mostrarEdit = false;
        this._ligasService.actualizarLiga(liga)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    LigasComponent.prototype.subirImagen = function (event, liga) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        this._generalesService.subirImagen(liga.id_liga, this.selectedFile, 'ligas')
            .subscribe(function (res) {
            _this.resultado = res;
            console.log(_this.resultado);
            liga.img = _this.resultado.imagen;
        });
    };
    LigasComponent.prototype.cambiarPagina = function (valor) {
        if (valor === 'a') {
            this.pagina = this.pagina + 1;
            this.cargarLigas(this.pagina, 'todas');
            if (this.pagina !== 1) {
                this.desactivar = 'color_grey';
            }
        }
        if (valor === 'b' && this.pagina > 1) {
            this.pagina = this.pagina - 1;
            this.cargarLigas(this.pagina, 'todas');
            if (this.pagina === 1) {
                this.desactivar = 'disabled';
            }
        }
    };
    LigasComponent.prototype.buscarElemento = function (valor) {
        this.liguias = [];
        if (valor !== '') {
            var busqueda_1 = new RegExp(valor, 'i');
            var liguias = this.ligas.filter(function (ligas) { return busqueda_1.test(ligas.nombre_liga); });
            console.log(liguias);
            this.liguias = liguias;
        }
    };
    LigasComponent = __decorate([
        core_1.Component({
            selector: 'app-ligas',
            templateUrl: './ligas.component.html',
            styleUrls: ['./ligas.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            ligas_service_1.LigasService,
            deportes_service_1.DeportesService,
            servicios_indice_1.NacionalidadesService,
            generales_service_1.GeneralesService,
            http_1.HttpClient])
    ], LigasComponent);
    return LigasComponent;
}());
exports.LigasComponent = LigasComponent;
//# sourceMappingURL=ligas.component.js.map