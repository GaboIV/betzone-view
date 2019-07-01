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
var usuario_1 = require("../modelos/usuario");
var InicioSesionService = /** @class */ (function () {
    function InicioSesionService(http) {
        this.http = http;
        this.esperando = false;
        this.ticketes = null;
        this.ticketes2 = null;
        this.wines = '';
        this.apostado = 0;
        this.menuT = [
            {
                titulo: 'Noticias',
                data: 'Ir a Noticias',
                icono: 'far fa-newspaper',
                link: 'noticias'
            },
            {
                titulo: 'Bancos',
                data: 'Ir a Bancos',
                icono: 'fa fa-university',
                link: 'bancos'
            },
            {
                titulo: 'Promociones',
                data: 'Ir a Promociones',
                icono: 'fa fa-gift',
                link: 'promociones'
            },
            {
                titulo: 'Estadísticas',
                data: 'Ir a Estadísticas',
                icono: 'fas fa-percent',
                link: 'estadisticas'
            },
            {
                titulo: 'Resultados',
                icono: 'fas fa-flag-checkered',
                data: 'Ir a Resultados',
                link: 'verResultados'
            }
        ];
        this.estatus = 'noSesion';
        this.usuario = new usuario_1.Usuario('', '', null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
        this.token = '';
    }
    InicioSesionService.prototype.cargarMenuLocal = function () {
        this.menu = JSON.parse(localStorage.getItem('menu'));
        if (this.menu === null) {
            this.menu = this.menuT;
        }
    };
    InicioSesionService.prototype.salirMenu = function () {
        console.log(this.menuT);
        this.menu = this.menuT;
    };
    InicioSesionService.prototype.obtenerUsuario = function (usuario, contrasena, tipoken) {
        var _this = this;
        if (usuario !== undefined) {
            return this.http.post(link_1.URL_FECHA + '/inicioSesion', {
                usuario: usuario,
                contrasena: contrasena,
                tipoken: tipoken
            }).pipe(operators_1.map(function (resp) {
                var res = resp;
                _this.menu = res.menu;
                localStorage.setItem('menu', JSON.stringify(_this.menu));
                return res;
            }));
        }
    };
    InicioSesionService.prototype.obtenerSelecciones = function () {
        var _this = this;
        this.esperando = true;
        var url = link_1.URL_SELECCION + '/obtener/' + this.usuario.id_usuario;
        console.log(url);
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            console.log(resp);
            localStorage.setItem('tiposeleccion', resp.tipo);
            localStorage.setItem('selecciones', JSON.stringify(resp.selecciones));
            if (resp.tipo === '2x') {
                _this.selecciones = [];
                _this.selecciones2 = resp.selecciones;
                _this.cuota = resp.cuota;
            }
            else if (resp.tipo === '27') {
                _this.selecciones2 = [];
                _this.selecciones = resp.selecciones;
            }
            else if (resp.tipo === '') {
                _this.selecciones = [];
                _this.selecciones2 = [];
            }
            _this.esperando = false;
            return resp;
        }));
    };
    InicioSesionService.prototype.seleccionh = function (id_apuesta, usuario) {
        var _this = this;
        this.esperando = true;
        this.ticketes = null;
        this.ticketes2 = null;
        var url = link_1.URL_SELECCION + '/agregarh/' + id_apuesta;
        return this.http.post(url, usuario)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            console.log(resp);
            _this.selecciones = resp.selecciones;
            _this.esperando = false;
            return res;
        }));
    };
    InicioSesionService.prototype.selecciond = function (id_apuesta, id_categoria, id_usuario) {
        var _this = this;
        this.esperando = true;
        this.ticketes = null;
        this.ticketes2 = null;
        var url = link_1.URL_SELECCION + '/agregard/' + id_apuesta;
        return this.http.post(url, { id_usuario: id_usuario, id_categoria: id_categoria })
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            if (resp.selecciones) {
                _this.selecciones2 = resp.selecciones;
                _this.cuota = resp.cuota;
            }
            _this.esperando = false;
            return res;
        }));
    };
    InicioSesionService.prototype.query = function () {
        var x = document.getElementsByClassName('amt');
        var y = document.getElementsByClassName('select_horse_win');
        var suma = 0;
        var valors = '';
        var wins = '';
        for (var i = 0; i < x.length; i++) {
            if (!isNaN(x[i].value) && x[i].value !== '') {
                suma = parseFloat(suma) + x[i].value;
                valors = valors + '#' + x[i].value;
            }
            else {
                valors = valors + '#';
            }
            if (!isNaN(y[i].value) && y[i].value !== '') {
                wins = wins + '#' + y[i].value;
            }
            else {
                wins = wins + '#';
            }
        }
        this.wines = wins;
        this.montos = valors;
        this.apostado = suma;
    };
    InicioSesionService.prototype.recogerSesion = function () {
        var idr = localStorage.getItem('id');
        var tokenr = localStorage.getItem('token');
        var usuarior = JSON.parse(localStorage.getItem('usuario'));
        if (usuarior !== null && tokenr !== null && idr !== null) {
            this.usuario = usuarior;
            this.usuario.id_usuario = idr;
            this.estatus = 'Sesion';
        }
    };
    InicioSesionService.prototype.guardarUsuario = function (id, token, usuario) {
        localStorage.setItem('id', id);
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify(this.usuario));
        this.token = token;
    };
    InicioSesionService.prototype.enviarTicket = function (montos) {
        var _this = this;
        this.esperando = true;
        var url = link_1.URL_TICKET + '/agregar';
        var id_usuario = this.usuario.id_usuario;
        return this.http.post(url, { montos: montos, id_usuario: id_usuario })
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            if (resp.status === 'success') {
                _this.ticketes = resp.ticketes;
                _this.usuario.disponible = resp.disponible;
                _this.selecciones = null;
                _this.esperando = false;
            }
            return res;
        }));
    };
    InicioSesionService.prototype.enviarTicketd = function (montos) {
        var _this = this;
        this.esperando = true;
        var url = link_1.URL_TICKET + '/agregard';
        var id_usuario = this.usuario.id_usuario;
        return this.http.post(url, { montos: montos, id_usuario: id_usuario })
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            if (resp.status === 'success') {
                _this.ticketes2 = resp.ticketes;
                _this.usuario.disponible = resp.disponible;
                _this.selecciones2 = null;
                _this.esperando = false;
            }
            return res;
        }));
    };
    InicioSesionService.prototype.cargarTickets = function (estatus) {
        var url = link_1.URL_TICKET + '/ver/' + this.usuario.id_usuario + '/' + estatus;
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.ticketes;
        }));
    };
    InicioSesionService.prototype.borrarSel = function (id_sel) {
        var _this = this;
        this.esperando = true;
        var url = link_1.URL_SELECCION + '/' + id_sel;
        return this.http.delete(url)
            .pipe(operators_1.map(function (resp) {
            _this.obtenerSelecciones();
            return resp;
        }));
    };
    InicioSesionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], InicioSesionService);
    return InicioSesionService;
}());
exports.InicioSesionService = InicioSesionService;
//# sourceMappingURL=inicio-sesion.service.js.map