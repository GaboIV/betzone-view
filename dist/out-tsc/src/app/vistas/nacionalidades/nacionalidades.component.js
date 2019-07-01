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
var generales_service_1 = require("../../servicios/generales.service");
var http_1 = require("@angular/common/http");
var NacionalidadesComponent = /** @class */ (function () {
    function NacionalidadesComponent(router, activatedRoute, _nacionalidadesService, _generalesService, http) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._nacionalidadesService = _nacionalidadesService;
        this._generalesService = _generalesService;
        this.http = http;
        this.mostrarEdit = false;
        this.pagina = 1;
        this.desactivar = 'disabled';
    }
    NacionalidadesComponent.prototype.ngOnInit = function () {
        this.cargarNacionalidades();
    };
    NacionalidadesComponent.prototype.cargarNacionalidades = function () {
        var _this = this;
        this._nacionalidadesService.cargarNacionalidades()
            .subscribe(function (nacionalidades) { return _this.nacionalidades = nacionalidades; });
    };
    NacionalidadesComponent.prototype.cambiarEdit = function () {
        this.mostrarEdit = true;
    };
    NacionalidadesComponent.prototype.ocultarEdit = function (nacionalidad) {
        this.mostrarEdit = false;
        this._nacionalidadesService.actualizarNacionalidad(nacionalidad)
            .subscribe(function (res) {
        });
    };
    NacionalidadesComponent.prototype.subirImagen = function (event, nacionalidad) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        this._generalesService.subirImagen(nacionalidad.id_lista_p, this.selectedFile, 'nacionalidades')
            .subscribe(function (res) {
            _this.resultado = res;
            nacionalidad.img = _this.resultado.imagen;
        });
    };
    NacionalidadesComponent.prototype.buscarElemento = function (valor) {
        if (valor === '') {
            valor = 'todos';
        }
        console.log(valor);
    };
    NacionalidadesComponent = __decorate([
        core_1.Component({
            selector: 'app-nacionalidades',
            templateUrl: './nacionalidades.component.html',
            styleUrls: ['./nacionalidades.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            servicios_indice_1.NacionalidadesService,
            generales_service_1.GeneralesService,
            http_1.HttpClient])
    ], NacionalidadesComponent);
    return NacionalidadesComponent;
}());
exports.NacionalidadesComponent = NacionalidadesComponent;
//# sourceMappingURL=nacionalidades.component.js.map