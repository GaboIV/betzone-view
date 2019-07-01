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
var operators_1 = require("rxjs/operators");
var link_1 = require("../comun/link");
var NacionalidadesService = /** @class */ (function () {
    function NacionalidadesService(http) {
        this.http = http;
    }
    NacionalidadesService.prototype.cargarNacionalidades = function () {
        var url = link_1.URL_NACIONALIDADES + '/ver/todos';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.nacionalidades;
        }));
    };
    NacionalidadesService.prototype.actualizarNacionalidad = function (nacionalidad) {
        var url = link_1.URL_NACIONALIDADES + '/actualizar';
        return this.http.post(url, nacionalidad)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    NacionalidadesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], NacionalidadesService);
    return NacionalidadesService;
}());
exports.NacionalidadesService = NacionalidadesService;
//# sourceMappingURL=nacionalidades.service.js.map