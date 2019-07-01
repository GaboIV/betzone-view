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
var link_1 = require("../comun/link");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var CaballosService = /** @class */ (function () {
    function CaballosService(http) {
        this.http = http;
        this.act_caballos = JSON.parse(localStorage.getItem('act_caballos'));
        this.act_jinetes = JSON.parse(localStorage.getItem('act_jinetes'));
        this.act_entrenadores = JSON.parse(localStorage.getItem('act_entrenadores'));
        this.act_haras = JSON.parse(localStorage.getItem('act_haras'));
        this.act_studs = JSON.parse(localStorage.getItem('act_studs'));
        this.act_hipodromos = JSON.parse(localStorage.getItem('act_hipodromos'));
        this.st_cab = '';
        this.st_jin = '';
        this.st_ent = '';
        this.st_har = '';
        this.st_stu = '';
    }
    CaballosService.prototype.cargarCaballos = function () {
        var _this = this;
        var url = link_1.URL_CABALLOS + '/ver/todos';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            if (resp.status === 'correcto') {
                _this.act_caballos = resp.actualizacion;
            }
            return resp;
        }));
    };
    CaballosService.prototype.cargarCaballosUI = function () {
        var url = link_1.URL_CABALLOS + '/caballosui';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.caballosui;
        }));
    };
    CaballosService.prototype.cargarPadrillosUI = function () {
        var url = link_1.URL_CABALLOS + '/padrillosui';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.padrillosui;
        }));
    };
    CaballosService.prototype.cargarMadrillasUI = function () {
        var url = link_1.URL_CABALLOS + '/madrillasui';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.madrillasui;
        }));
    };
    CaballosService.prototype.cargarHarasUI = function () {
        var url = link_1.URL_CABALLOS + '/harasui';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.harasui;
        }));
    };
    CaballosService.prototype.cargarJinetes = function () {
        var url = link_1.URL_JINETES + '/ver/todos';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp;
        }));
    };
    CaballosService.prototype.cargarJinetesUI = function () {
        var url = link_1.URL_CABALLOS + '/jinetesui';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.jinetesui;
        }));
    };
    CaballosService.prototype.cargarEntrenadores = function () {
        var url = link_1.URL_ENTRENADORES + '/ver/todos';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp;
        }));
    };
    CaballosService.prototype.cargarEntrenadoresUI = function () {
        var url = link_1.URL_CABALLOS + '/entrenadoresui';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.entrenadoresui;
        }));
    };
    CaballosService.prototype.cargarHaras = function () {
        var url = link_1.URL_HARAS + '/ver/todos';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp;
        }));
    };
    CaballosService.prototype.cargarStuds = function () {
        var url = link_1.URL_STUDS + '/ver/todos';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp;
        }));
    };
    CaballosService.prototype.cargarStudsUI = function () {
        var url = link_1.URL_CABALLOS + '/studsui';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.studsui;
        }));
    };
    CaballosService.prototype.cargarHipodromos = function () {
        var url = link_1.URL_HIPODROMOS + '/ver/todos';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp;
        }));
    };
    CaballosService.prototype.cargarCarreras = function (dato) {
        var url = link_1.URL_CARRERAS + '/ver/' + dato;
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp;
        }));
    };
    CaballosService.prototype.crearCaballo = function (caballo) {
        var url = link_1.URL_CABALLOS + '/crear';
        return this.http.post(url, caballo)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    CaballosService.prototype.crearJinete = function (jinete) {
        var url = link_1.URL_JINETES + '/crear';
        return this.http.post(url, jinete)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    CaballosService.prototype.crearEntrenador = function (entrenador) {
        var url = link_1.URL_ENTRENADORES + '/crear';
        return this.http.post(url, entrenador)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    CaballosService.prototype.crearHaras = function (haras) {
        var url = link_1.URL_HARAS + '/crear';
        return this.http.post(url, haras)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    CaballosService.prototype.crearStuds = function (stud) {
        var url = link_1.URL_STUDS + '/crear';
        return this.http.post(url, stud)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    CaballosService.prototype.crearHipodromo = function (hipodromo) {
        var url = link_1.URL_HIPODROMOS + '/crear';
        return this.http.post(url, hipodromo)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    CaballosService.prototype.crearCarrera = function (carrera) {
        var url = link_1.URL_CARRERAS + '/crear';
        return this.http.post(url, carrera)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    CaballosService.prototype.crearInscripcion = function (inscripcion) {
        var url = link_1.URL_INSCRIPCION + '/crear';
        return this.http.post(url, inscripcion)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    CaballosService.prototype.actualizarCaballo = function (caballo) {
        var url = link_1.URL_CABALLOS + '/actualizar';
        return this.http.post(url, caballo)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    CaballosService.prototype.actualizarStud = function (stud) {
        var url = link_1.URL_STUDS + '/actualizar';
        var descripcion = stud.descripcion;
        var id_stud = stud.id_stud;
        return this.http.post(url, { descripcion: descripcion, id_stud: id_stud })
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    CaballosService.prototype.agregarIns = function (numero, id_carrera) {
        var url = link_1.URL_CARRERAS + '/inscribir/' + id_carrera + '/' + numero;
        return this.http.post(url, numero)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    CaballosService.prototype.retirarIns = function (id_inscripcion) {
        var url = link_1.URL_INSCRIPCION + '/retirar';
        return this.http.post(url, { id_inscripcion: id_inscripcion })
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    CaballosService.prototype.eliminarIns = function (id_inscripcion) {
        var url = link_1.URL_INSCRIPCION + '/eliminar/' + id_inscripcion;
        return this.http.delete(url)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    CaballosService.prototype.enviarCarrera = function (carrera) {
        var url = link_1.URL_CARRERAS + '/enviada';
        return this.http.post(url, { carrera: carrera })
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    CaballosService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CaballosService);
    return CaballosService;
}());
exports.CaballosService = CaballosService;
//# sourceMappingURL=caballos.service.js.map