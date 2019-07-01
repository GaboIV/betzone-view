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
var deportes_service_1 = require("../../servicios/deportes.service");
var partidos_service_1 = require("../../servicios/partidos.service");
var ResultadosComponent = /** @class */ (function () {
    function ResultadosComponent(_deporteService, _partidosService) {
        this._deporteService = _deporteService;
        this._partidosService = _partidosService;
        this.ligas = [];
        this.partidos = [];
        this.carreras = [];
    }
    ResultadosComponent.prototype.ngOnInit = function () {
        this.cargarDeportes();
    };
    ResultadosComponent.prototype.cargarDeportes = function () {
        var _this = this;
        this._deporteService.cargarDeportes()
            .subscribe(function (deportes) { return _this.deportes = deportes; });
    };
    ResultadosComponent.prototype.seleccionDeporte = function (seleccion) {
        var _this = this;
        this.ligas = null;
        this._partidosService.seleccionDeporte(seleccion)
            .subscribe(function (ligas) { return _this.ligas = ligas; });
    };
    ResultadosComponent.prototype.seleccionLiga = function (seleccion) {
        var _this = this;
        this.partidos = null;
        this.carreras = null;
        this._partidosService.seleccionLiga(seleccion)
            .subscribe(function (partidos) { return _this.partidos = partidos; });
    };
    ResultadosComponent.prototype.seleccionHipodromo = function (seleccion) {
        var _this = this;
        this.partidos = null;
        this.carreras = null;
        this._partidosService.seleccionHipodromo(seleccion)
            .subscribe(function (carreras) { return _this.carreras = carreras; });
    };
    ResultadosComponent.prototype.enviarRL = function (id_partido, id_categoria, id_ta) {
        var valor1 = $('#RL0' + id_partido).text();
        var valor2 = $('#RL1' + id_partido).text();
        var resultado = valor1 + '!' + valor2;
        this._partidosService.enviarRL(id_partido, id_categoria, id_ta, resultado)
            .subscribe(function (resp) {
            console.log(resp);
        });
    };
    ResultadosComponent.prototype.enviarCB = function (id_carrera) {
        var cab1 = $('#' + id_carrera + 'cab1').val();
        var cab2 = $('#' + id_carrera + 'cab2').val();
        var cab3 = $('#' + id_carrera + 'cab3').val();
        var div1 = $('#' + id_carrera + 'div1').text();
        var div2 = $('#' + id_carrera + 'div2').text();
        var div3 = $('#' + id_carrera + 'div3').text();
        var dato = cab1 + '#' + div1 + '!' + cab2 + '#' + div2 + '!' + cab3 + '#' + div3;
        this._partidosService.enviarCB(id_carrera, dato)
            .subscribe(function (resp) {
            console.log(resp);
        });
    };
    ResultadosComponent = __decorate([
        core_1.Component({
            selector: 'app-resultados',
            templateUrl: './resultados.component.html',
            styleUrls: ['./resultados.component.css']
        }),
        __metadata("design:paramtypes", [deportes_service_1.DeportesService,
            partidos_service_1.PartidosService])
    ], ResultadosComponent);
    return ResultadosComponent;
}());
exports.ResultadosComponent = ResultadosComponent;
//# sourceMappingURL=resultados.component.js.map