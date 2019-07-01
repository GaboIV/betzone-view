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
var generales_service_1 = require("../../../servicios/generales.service");
var inicio_sesion_service_1 = require("../../../servicios/inicio-sesion.service");
var sub_menu_service_1 = require("../../../servicios/sub-menu.service");
var CabeceraComponent = /** @class */ (function () {
    function CabeceraComponent(_generalesService, _sesionUsuario, _subMenuService) {
        var _this = this;
        this._generalesService = _generalesService;
        this._sesionUsuario = _sesionUsuario;
        this._subMenuService = _subMenuService;
        this.token = '';
        setInterval(function () { _this.actualizarHora(); }, 1000);
    }
    CabeceraComponent.prototype.ngOnInit = function () {
        this.recibirHora();
        this.sesionActiva();
        this._generalesService.query();
    };
    CabeceraComponent.prototype.recibirHora = function () {
        var _this = this;
        this._generalesService.recibirHora()
            .subscribe(function (fecha) { return _this.fecha = fecha; });
    };
    CabeceraComponent.prototype.actualizarHora = function () {
        var date = new Date(this.fecha);
        date.setSeconds(date.getSeconds() + 1);
        this.hora = this.formatAMPM(date);
        this.fecha = date;
        this._generalesService.fecha = this.fecha;
    };
    CabeceraComponent.prototype.formatAMPM = function (date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        return strTime;
    };
    CabeceraComponent.prototype.loginUsuario = function (event) {
        var _this = this;
        event.preventDefault();
        var tarjeta = event.target;
        var usuario = tarjeta.querySelector('#usuario').value;
        var contrasena = tarjeta.querySelector('#contrasena').value;
        this._sesionUsuario.obtenerUsuario(usuario, contrasena, 'contrasena')
            .subscribe(function (res) {
            if (res.status === 'correcto') {
                _this._subMenuService.cargarMenu();
                _this._sesionUsuario.estatus = 'Sesion';
                _this._sesionUsuario.usuario = res.usuario;
                _this._sesionUsuario.guardarUsuario(res.usuario.id_usuario, res.usuario.token, res.usuario.usuario);
            }
        });
    };
    CabeceraComponent.prototype.logout = function () {
        this.usuario = null;
        this.token = '';
        localStorage.removeItem('token');
        localStorage.removeItem('menu');
        localStorage.removeItem('usuario');
        localStorage.removeItem('id');
        this._sesionUsuario.usuario = null;
        this._sesionUsuario.estatus = 'noSesion';
        this._sesionUsuario.salirMenu();
    };
    CabeceraComponent.prototype.sesionActiva = function () {
        var _this = this;
        this._sesionUsuario.recogerSesion();
        this._sesionUsuario.obtenerUsuario(this._sesionUsuario.usuario.usuario, this._sesionUsuario.usuario.token, 'token')
            .subscribe(function (res) {
            if (res.status === 'correcto') {
                _this._subMenuService.cargarMenu();
                _this._sesionUsuario.estatus = 'Sesion';
                _this._sesionUsuario.usuario = res.usuario;
                _this._sesionUsuario.guardarUsuario(res.usuario.id_usuario, res.usuario.token, res.usuario.usuario);
            }
        });
    };
    CabeceraComponent = __decorate([
        core_1.Component({
            selector: 'app-cabecera',
            templateUrl: './cabecera.component.html',
            styleUrls: ['./cabecera.component.css']
        }),
        __metadata("design:paramtypes", [generales_service_1.GeneralesService,
            inicio_sesion_service_1.InicioSesionService,
            sub_menu_service_1.SubMenuService])
    ], CabeceraComponent);
    return CabeceraComponent;
}());
exports.CabeceraComponent = CabeceraComponent;
//# sourceMappingURL=cabecera.component.js.map