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
var tipo_apuesta_service_1 = require("../../servicios/tipo-apuesta.service");
var router_1 = require("@angular/router");
var generales_service_1 = require("../../servicios/generales.service");
var http_1 = require("@angular/common/http");
var TipoApuestasComponent = /** @class */ (function () {
    function TipoApuestasComponent(router, activatedRoute, _tipoApuestaService, _generalesService, http) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._tipoApuestaService = _tipoApuestaService;
        this._generalesService = _generalesService;
        this.http = http;
        this.mostrarEdit = false;
        this.pagina = 1;
        this.desactivar = 'disabled';
    }
    TipoApuestasComponent.prototype.ngOnInit = function () {
        this.cargarTipoApuesta();
    };
    TipoApuestasComponent.prototype.cargarTipoApuesta = function () {
        var _this = this;
        this._tipoApuestaService.cargarTipoApuestas()
            .subscribe(function (tipoApuestas) { return _this.tipoApuestas = tipoApuestas; });
    };
    TipoApuestasComponent.prototype.cambiarEdit = function () {
        this.mostrarEdit = true;
    };
    TipoApuestasComponent.prototype.ocultarEdit = function (tipoApuesta) {
        console.log(tipoApuesta);
        this.mostrarEdit = false;
    };
    TipoApuestasComponent = __decorate([
        core_1.Component({
            selector: 'app-tipo-apuestas',
            templateUrl: './tipo-apuestas.component.html',
            styleUrls: ['./tipo-apuestas.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            tipo_apuesta_service_1.TipoApuestaService,
            generales_service_1.GeneralesService,
            http_1.HttpClient])
    ], TipoApuestasComponent);
    return TipoApuestasComponent;
}());
exports.TipoApuestasComponent = TipoApuestasComponent;
//# sourceMappingURL=tipo-apuestas.component.js.map