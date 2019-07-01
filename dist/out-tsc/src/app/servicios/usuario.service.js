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
var http_1 = require("@angular/common/http");
var link_1 = require("../comun/link");
var operators_1 = require("rxjs/operators");
var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.http = http;
    }
    UsuarioService.prototype.crearUsuario = function (usuario) {
        var url = link_1.URL_USUARIOS + '/crear';
        return this.http.post(url, usuario)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    UsuarioService.prototype.activarUsuario = function (cod_act) {
        var url = link_1.URL_USUARIOS + '/activar/' + cod_act;
        return this.http.post(url, cod_act)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    UsuarioService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map