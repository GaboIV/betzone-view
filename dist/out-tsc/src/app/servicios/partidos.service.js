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
var PartidosService = /** @class */ (function () {
    function PartidosService(http) {
        this.http = http;
    }
    PartidosService.prototype.cargarPartidos = function (pagina, criterio) {
        var url = '';
        if (criterio !== null) {
            url = link_1.URL_PARTIDOS + '/ver/' + pagina + '/' + criterio;
        }
        else {
            url = link_1.URL_PARTIDOS + '/ver/' + pagina + '/todos';
        }
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.partidos;
        }));
    };
    PartidosService.prototype.cargarDestacados = function () {
        var url = link_1.URL_PARTIDOS + '/ver/destacados';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.destacados;
        }));
    };
    PartidosService.prototype.partidosPorCategoria = function (id, dato, equipo) {
        var url = link_1.URL_PARTIDOS + '/categoria/' + id + '?fecha=' + dato + '&busqueda=' + equipo;
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.partidos;
        }));
    };
    PartidosService.prototype.actualizarPartido = function (partido) {
        var url = link_1.URL_PARTIDOS + '/actualizar';
        return this.http.post(url, partido)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    PartidosService.prototype.seleccionDeporte = function (id_categoria) {
        var url = link_1.URL_RESULTADOS + '/deporte/' + id_categoria;
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.ligas;
        }));
    };
    PartidosService.prototype.seleccionLiga = function (id_liga) {
        var url = link_1.URL_RESULTADOS + '/liga/' + id_liga;
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.partidos;
        }));
    };
    PartidosService.prototype.seleccionHipodromo = function (id_hipodromo) {
        var url = link_1.URL_RESULTADOS + '/hipodromo/' + id_hipodromo;
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.carreras;
        }));
    };
    PartidosService.prototype.enviarRL = function (id_partido, id_categoria, id_ta, resultado) {
        var url = link_1.URL_RESULTADOS + '/agregar';
        return this.http.post(url, { id_partido: id_partido, id_ta: id_ta, id_categoria: id_categoria, resultado: resultado })
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    PartidosService.prototype.enviarCB = function (id_carrera, resultado) {
        var url = link_1.URL_RESULTADOS + '/agregar2';
        return this.http.post(url, { id_carrera: id_carrera, resultado: resultado })
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    PartidosService.prototype.guardarDatos = function (pitchers, partido) {
        var url = link_1.URL_PARTIDOS + '/agregarDatos';
        return this.http.post(url, { pitchers: pitchers, partido: partido })
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    PartidosService.prototype.crearPartido = function (partido) {
        var url = link_1.URL_PARTIDOS + '/crear';
        return this.http.post(url, partido)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    PartidosService.prototype.cargarEnVivo = function () {
        var url = link_1.URL_PARTIDOS + '/ver/live';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp;
        }));
    };
    PartidosService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PartidosService);
    return PartidosService;
}());
exports.PartidosService = PartidosService;
//# sourceMappingURL=partidos.service.js.map