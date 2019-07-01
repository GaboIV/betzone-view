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
var inicio_sesion_service_1 = require("../../../servicios/inicio-sesion.service");
var HistorialComponent = /** @class */ (function () {
    function HistorialComponent(route, _inicioSesion) {
        this.route = route;
        this._inicioSesion = _inicioSesion;
    }
    HistorialComponent.prototype.ngOnInit = function () {
        this.cargarTicketes('todos');
    };
    HistorialComponent.prototype.cargarTicketes = function (estatus) {
        var _this = this;
        this._inicioSesion.cargarTickets(estatus)
            .subscribe(function (ticketes) {
            _this.tickets = ticketes;
        });
    };
    HistorialComponent = __decorate([
        core_1.Component({
            selector: 'app-historial',
            templateUrl: './historial.component.html',
            styleUrls: ['./historial.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            inicio_sesion_service_1.InicioSesionService])
    ], HistorialComponent);
    return HistorialComponent;
}());
exports.HistorialComponent = HistorialComponent;
//# sourceMappingURL=historial.component.js.map