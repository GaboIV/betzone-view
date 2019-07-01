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
var inicio_sesion_service_1 = require("../servicios/inicio-sesion.service");
var AdminGuardGuard = /** @class */ (function () {
    function AdminGuardGuard(_inicioSesion) {
        this._inicioSesion = _inicioSesion;
    }
    AdminGuardGuard.prototype.canActivate = function () {
        if (this._inicioSesion.usuario.id_rol === '1') {
            return true;
        }
        else {
            console.log('Bloqueado por el ADMIN GUARD');
            return false;
        }
    };
    AdminGuardGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [inicio_sesion_service_1.InicioSesionService])
    ], AdminGuardGuard);
    return AdminGuardGuard;
}());
exports.AdminGuardGuard = AdminGuardGuard;
//# sourceMappingURL=admin-guard.guard.js.map