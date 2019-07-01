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
var usuario_1 = require("../../modelos/usuario");
var router_1 = require("@angular/router");
var servicios_indice_1 = require("../../servicios/servicios.indice");
var generales_service_1 = require("../../servicios/generales.service");
var http_1 = require("@angular/common/http");
var usuario_service_1 = require("../../servicios/usuario.service");
var $ = require("jquery");
var ngx_toastr_1 = require("ngx-toastr");
var util_1 = require("util");
var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(router, activatedRoute, _nacionalidadesService, _generalesService, _usuarioService, http, toastr) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._nacionalidadesService = _nacionalidadesService;
        this._generalesService = _generalesService;
        this._usuarioService = _usuarioService;
        this.http = http;
        this.toastr = toastr;
        this.usuario = new usuario_1.Usuario('', '', null, '0', '', '0', '', '0', '2', '', '', '', '', '231', '', '', '', '', '5', '', '', '', '1', '');
        this.nacDia = 1;
        this.nacMes = 1;
        this.nacAnio = 2018;
        this.registro = false;
    }
    RegistroComponent.prototype.ngOnInit = function () {
        this.usuario.nacimiento = this.nacAnio + '-' + this.nacMes + '-' + this.nacDia;
    };
    RegistroComponent.prototype.enviarDatos = function (form) {
        var _this = this;
        var mensaje = '';
        var tipo = '';
        if (this.usuario.id_pais === '231') {
            if (this.usuario.tratamiento === '1' || this.usuario.tratamiento === '2' || this.usuario.tratamiento === '3') {
                if (this.usuario.nombres.length >= 3) {
                    if (this.usuario.apellidos.length >= 3) {
                        if (util_1.isDate(this.usuario.nacimiento)) {
                            if (!isNaN(this.usuario.cedula) && this.usuario.cedula > 999999) {
                                if (this.usuario.usuario.length >= 3) {
                                    if (this.usuario.password.length > 5 && (this.usuario.password === this.usuario.password2)) {
                                        if (this.usuario.numerico.length > 3 && (this.usuario.numerico === this.usuario.numerico2)) {
                                            this._usuarioService.crearUsuario(this.usuario)
                                                .subscribe(function (res) {
                                                if (res.status === 'correcto') {
                                                    _this.registro = true;
                                                }
                                            });
                                        }
                                        else {
                                            mensaje = 'Los números de seguridad escritos no coinciden o son inválidos';
                                            tipo = 'error';
                                            $('#nro32').select().focus();
                                        }
                                    }
                                    else {
                                        mensaje = 'Las contraseñas escritas no coinciden o son inválidos';
                                        tipo = 'error';
                                        $('#nro31').select().focus();
                                    }
                                }
                                else {
                                    mensaje = 'Nombre de usuario debe ser mayor a 3 caracteres';
                                    tipo = 'error';
                                    $('#nro30').select().focus();
                                }
                            }
                            else {
                                mensaje = 'Número de cédula inválido';
                                tipo = 'error';
                                $('#nro67').select().focus();
                            }
                        }
                        else {
                            mensaje = 'Fecha inválida';
                            tipo = 'error';
                            $('#nro37').select().focus();
                        }
                    }
                    else {
                        mensaje = 'Apellidos(s) deben ser mayor a 3 caracteres';
                        tipo = 'error';
                        $('#nro4').select().focus();
                    }
                }
                else {
                    mensaje = 'Nombre(s) deben ser mayor a 3 caracteres';
                    tipo = 'error';
                    $('#nro3').select().focus();
                }
            }
            else {
                mensaje = 'Tipo de tratamiento seleccionado no válido';
                tipo = 'error';
            }
        }
        else {
            mensaje = 'País seleccionado no válido';
            tipo = 'error';
        }
        if (tipo === 'error') {
            this.toastr.error('Error', mensaje, {
                timeOut: 3000,
                positionClass: 'toast-bottom-right'
            });
        }
    };
    RegistroComponent.prototype.ajustarNac = function (tipo, evento) {
        if (tipo === 'dia') {
            this.nacDia = evento;
        }
        if (tipo === 'mes') {
            this.nacMes = evento;
        }
        if (tipo === 'anio') {
            this.nacAnio = evento;
        }
        var fecha = new Date(this.nacAnio + '-' + this.nacMes + '-' + this.nacDia + ' GMT -0500');
        this.nacDia = fecha.getDate();
        this.nacMes = fecha.getMonth() + 1;
        this.nacAnio = fecha.getFullYear();
        if (isNaN(this.nacDia)) {
            fecha = new Date('1999-1-1');
            this.nacDia = fecha.getDate();
            this.nacMes = fecha.getMonth() + 1;
            this.nacAnio = fecha.getFullYear();
        }
        this.usuario.nacimiento = fecha;
    };
    RegistroComponent = __decorate([
        core_1.Component({
            selector: 'app-registro',
            templateUrl: './registro.component.html',
            styleUrls: ['./registro.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            servicios_indice_1.NacionalidadesService,
            generales_service_1.GeneralesService,
            usuario_service_1.UsuarioService,
            http_1.HttpClient,
            ngx_toastr_1.ToastrService])
    ], RegistroComponent);
    return RegistroComponent;
}());
exports.RegistroComponent = RegistroComponent;
//# sourceMappingURL=registro.component.js.map