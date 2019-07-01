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
var EquiposService = /** @class */ (function () {
    function EquiposService(http) {
        this.http = http;
    }
    EquiposService.prototype.cargarEquipos = function (pagina, criterio, liga) {
        var url = '';
        if (criterio !== null) {
            url = link_1.URL_EQUIPOS + '/ver/' + pagina + '/' + criterio + '/' + liga;
        }
        else {
            url = link_1.URL_EQUIPOS + '/ver/' + pagina + '/todos/' + '/' + liga;
        }
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.equipos;
        }));
    };
    EquiposService.prototype.actualizarEquipo = function (equipo) {
        var url = link_1.URL_EQUIPOS + '/actualizar';
        return this.http.post(url, equipo)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    EquiposService.prototype.subirImagen = function (equipo, selectedFile) {
        var uploadData = new FormData();
        uploadData.append('myFile', selectedFile, selectedFile.name);
        return this.http.post('http://localhost/bzbk/public/subida_logos.php?id=' + equipo.id_equipo, uploadData)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    EquiposService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EquiposService);
    return EquiposService;
}());
exports.EquiposService = EquiposService;
//# sourceMappingURL=equipos.service.js.map