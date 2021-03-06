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
var inicio_sesion_service_1 = require("src/app/servicios/inicio-sesion.service");
var MiCuentaComponent = /** @class */ (function () {
    function MiCuentaComponent(route, _inicioSesion) {
        this.route = route;
        this._inicioSesion = _inicioSesion;
    }
    MiCuentaComponent.prototype.ngOnInit = function () {
    };
    MiCuentaComponent = __decorate([
        core_1.Component({
            selector: 'app-mi-cuenta',
            templateUrl: './mi-cuenta.component.html',
            styleUrls: ['./mi-cuenta.component.css', '../opciones/historial/historial.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            inicio_sesion_service_1.InicioSesionService])
    ], MiCuentaComponent);
    return MiCuentaComponent;
}());
exports.MiCuentaComponent = MiCuentaComponent;
//# sourceMappingURL=mi-cuenta.component.js.map