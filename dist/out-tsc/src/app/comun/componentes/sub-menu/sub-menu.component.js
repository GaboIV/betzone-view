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
var generales_service_1 = require("../../../servicios/generales.service");
var $ = require("jquery");
var servicios_indice_1 = require("../../../servicios/servicios.indice");
var inicio_sesion_service_1 = require("../../../servicios/inicio-sesion.service");
var SubMenuComponent = /** @class */ (function () {
    function SubMenuComponent(router, _generalService, _inicioSesion, _subMenuService) {
        this.router = router;
        this._generalService = _generalService;
        this._inicioSesion = _inicioSesion;
        this._subMenuService = _subMenuService;
    }
    SubMenuComponent.prototype.ngOnInit = function () {
        this.usuario = this._inicioSesion.usuario;
        if (this.usuario !== undefined) {
            this._subMenuService.cargarMenu();
        }
    };
    SubMenuComponent.prototype.mostrarAlert = function (mensaje) {
        $('#toolOpt').html(mensaje);
    };
    SubMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-sub-menu',
            templateUrl: './sub-menu.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [router_1.Router,
            generales_service_1.GeneralesService,
            inicio_sesion_service_1.InicioSesionService,
            servicios_indice_1.SubMenuService])
    ], SubMenuComponent);
    return SubMenuComponent;
}());
exports.SubMenuComponent = SubMenuComponent;
//# sourceMappingURL=sub-menu.component.js.map