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
var caballos_service_1 = require("src/app/servicios/caballos.service");
var router_1 = require("@angular/router");
var inicio_sesion_service_1 = require("../../servicios/inicio-sesion.service");
var sweetalert2_1 = require("sweetalert2");
var partidos_service_1 = require("src/app/servicios/partidos.service");
var generales_service_1 = require("../../servicios/generales.service");
var VerCarreraComponent = /** @class */ (function () {
    function VerCarreraComponent(router, route, _caballoService, _inicioSesion, _generalesService, _partidosService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._caballoService = _caballoService;
        this._inicioSesion = _inicioSesion;
        this._generalesService = _generalesService;
        this._partidosService = _partidosService;
        this.carrera = [];
        this.mstatus = null;
        this.wines = '';
        this.param = '';
        this.esperando = false;
        setInterval(function () { _this.conteo(_this.carrera[0].fecha_hora); }, 1000);
    }
    VerCarreraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (parametros) {
            var param = parametros.id_carrera;
            _this.param = param;
            _this._caballoService.cargarCarreras(param)
                .subscribe(function (resp) {
                _this.carrera = resp.carreras;
            });
        });
        this.scroll_cuot();
    };
    VerCarreraComponent.prototype.seleccionh = function (id_apuesta) {
        var _this = this;
        this.esperando = true;
        var toast = sweetalert2_1.default.mixin({
            toast: true,
            position: 'top-end'
        });
        toast({
            type: 'info',
            title: 'Enviando datos'
        });
        this._inicioSesion.seleccionh(id_apuesta, this._inicioSesion.usuario)
            .subscribe(function (resp) {
            _this.esperando = false;
            // tslint:disable-next-line:no-shadowed-variable
            var toast = sweetalert2_1.default.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000
            });
            toast({
                type: resp.status,
                title: resp.mstatus
            });
            _this.mstatus = resp.mstatus;
        });
    };
    VerCarreraComponent.prototype.conteo = function (fecha) {
        var fecha_hora = new Date(fecha);
        var hoy = new Date(this._generalesService.fecha);
        var dias = 0;
        var horas = 0;
        var minutos = 0;
        var segundos = 0;
        if (fecha_hora > hoy) {
            var diferencia = (fecha_hora.getTime() - hoy.getTime()) / 1000;
            dias = Math.floor(diferencia / 86400);
            diferencia = diferencia - (86400 * dias);
            horas = Math.floor(diferencia / 3600);
            diferencia = diferencia - (3600 * horas);
            minutos = Math.floor(diferencia / 60);
            diferencia = diferencia - (60 * minutos);
            segundos = Math.floor(diferencia);
            if (horas < 10) {
                horas = '0' + horas;
            }
            if (minutos < 10) {
                minutos = '0' + minutos;
            }
            if (segundos < 10) {
                segundos = '0' + segundos;
            }
            if (dias === 0) {
                this.regreso = horas + 'h ' + minutos + 'm ' + segundos + 's';
            }
            if (dias > 0) {
                this.regreso = dias + 'D ' + horas + ':' + minutos + ':' + segundos;
            }
        }
        else {
            this.regreso = dias + ' D&iacute;as, ' + horas + ' Horas, ' + minutos + ' Minutos, ' + segundos + ' Segundos';
        }
    };
    VerCarreraComponent.prototype.scroll_cuot = function () {
        $(function () {
            $(window).scroll(function () {
                var ancho = $('.zona_cuota').width();
                if ($(this).scrollTop() > 137) {
                    $('.zona_cuota').addClass('fixed');
                    $('.zona_cuota').removeClass('unfixed');
                    $('.zona_cuota').width(ancho);
                }
                else {
                    $('.zona_cuota').removeClass('fixed');
                    $('.zona_cuota').addClass('unfixed');
                }
            });
        });
    };
    VerCarreraComponent = __decorate([
        core_1.Component({
            selector: 'app-ver-carrera',
            templateUrl: './ver-carrera.component.html',
            styleUrls: ['./ver-carrera.component.css', './carrera.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            caballos_service_1.CaballosService,
            inicio_sesion_service_1.InicioSesionService,
            generales_service_1.GeneralesService,
            partidos_service_1.PartidosService])
    ], VerCarreraComponent);
    return VerCarreraComponent;
}());
exports.VerCarreraComponent = VerCarreraComponent;
//# sourceMappingURL=ver-carrera.component.js.map