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
var LigasService = /** @class */ (function () {
    function LigasService(http) {
        this.http = http;
    }
    LigasService.prototype.cargarLigas = function (pagina, criterio) {
        var url = '';
        if (criterio !== null) {
            url = link_1.URL_LIGAS + '/ver/' + pagina + '/' + criterio;
        }
        else {
            url = link_1.URL_LIGAS + '/ver/' + pagina + '/todas';
        }
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.ligas;
        }));
    };
    LigasService.prototype.cargarActualizaciones = function () {
        var url = link_1.URL_ACTUALIZACIONES + '/ver/' + 'todas';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.actualizaciones;
        }));
    };
    LigasService.prototype.actualizarLiga = function (liga) {
        var url = link_1.URL_LIGAS + '/actualizar';
        return this.http.post(url, liga)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    LigasService.prototype.crearLiga = function (liga) {
        var url = link_1.URL_LIGAS + '/agregar';
        return this.http.post(url, liga)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    LigasService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LigasService);
    return LigasService;
}());
exports.LigasService = LigasService;
//# sourceMappingURL=ligas.service.js.map