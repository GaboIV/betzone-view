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
var caballos_1 = require("../../modelos/caballos");
var caballos_service_1 = require("../../servicios/caballos.service");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var ngx_toastr_1 = require("ngx-toastr");
var NuevoCaballoComponent = /** @class */ (function () {
    function NuevoCaballoComponent(router, activatedRoute, _caballosService, http, toastr) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._caballosService = _caballosService;
        this.http = http;
        this.toastr = toastr;
        this.caballo = new caballos_1.Caballo('', '', '', 1, '', '', '', '', '2012-01-01', '', '');
        this.nacDia = '01';
        this.nacMes = '01';
        this.nacAnio = '2012';
        this.registro = false;
        this.caballos = [];
    }
    NuevoCaballoComponent.prototype.ngOnInit = function () {
        this.cargarPadrillosUI('normal');
        this.cargarMadrillasUI('normal');
        this.cargarHarasUI('normal');
        $('#nombre_hrs').focus();
    };
    NuevoCaballoComponent.prototype.enviarDatos = function () {
        var _this = this;
        this.caballo.nombre = $('#nombre_hrs').val();
        this.caballo.padre = $('#padre_hrs').val();
        this.caballo.madre = $('#madre_hrs').val();
        this.caballo.id_haras = $('#haras_hrs').val();
        this._caballosService.crearCaballo(this.caballo)
            .subscribe(function (res) {
            if (res.status === 'correcto') {
                _this.toastr.success('Correcto', 'Ejemplar guardado satisfactoriamente', {
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right'
                });
                _this.caballos = JSON.parse(localStorage.getItem('caballos'));
                _this.caballos.push(res.caballo);
                _this.caballos.sort(function (a, b) { return (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0); });
                localStorage.setItem('caballos', JSON.stringify(_this.caballos));
                _this.caballosui = JSON.parse(localStorage.getItem('caballosui'));
                _this.caballosui.push(res.caballo.nombre);
                _this.caballosui.sort(function (a, b) { return (a > b) ? 1 : ((b > a) ? -1 : 0); });
                localStorage.setItem('caballosui', JSON.stringify(_this.caballosui));
                _this.padrillosui = JSON.parse(localStorage.getItem('padrillosui'));
                _this.padrillosui.push(res.caballo.padre.nombre);
                _this.padrillosui.sort(function (a, b) { return (a > b) ? 1 : ((b > a) ? -1 : 0); });
                localStorage.setItem('padrillosui', JSON.stringify(_this.padrillosui));
                _this.madrillasui = JSON.parse(localStorage.getItem('madrillasui'));
                _this.madrillasui.push(res.caballo.madre.nombre);
                _this.madrillasui.sort(function (a, b) { return (a > b) ? 1 : ((b > a) ? -1 : 0); });
                localStorage.setItem('madrillasui', JSON.stringify(_this.madrillasui));
                _this.harasui = JSON.parse(localStorage.getItem('harasui'));
                _this.harasui.push(res.caballo.id_haras.descripcion);
                _this.harasui.sort(function (a, b) { return (a > b) ? 1 : ((b > a) ? -1 : 0); });
                localStorage.setItem('harasui', JSON.stringify(_this.harasui));
                _this.router.navigate(['/caballos']);
            }
            else {
            }
        });
    };
    NuevoCaballoComponent.prototype.cargarHarasUI = function (dato) {
        var _this = this;
        if (localStorage.getItem('harasui') !== null) {
            this.harasui = JSON.parse(localStorage.getItem('harasui'));
            $(function () {
                $('#haras_hrs').autocomplete({
                    source: _this.harasui
                });
            });
        }
        else {
            this._caballosService.cargarHarasUI()
                .subscribe(function (harasui) {
                $('#act_har').removeClass('fa-spin');
                _this.harasui = harasui;
                localStorage.setItem('harasui', JSON.stringify(harasui));
                $(function () {
                    $('#haras_hrs').autocomplete({
                        source: harasui
                    });
                });
            });
        }
    };
    NuevoCaballoComponent.prototype.cargarPadrillosUI = function (dato) {
        var _this = this;
        if (dato === 'borrar') {
            $('#act_pad').addClass(' fa-spin ');
            localStorage.removeItem('padrillosui');
        }
        if (localStorage.getItem('padrillosui') !== null) {
            this.padrillosui = JSON.parse(localStorage.getItem('padrillosui'));
            $(function () {
                $('#padre_hrs').autocomplete({
                    source: _this.padrillosui
                });
            });
        }
        else {
            this._caballosService.cargarPadrillosUI()
                .subscribe(function (padrillosui) {
                $('#act_pad').removeClass('fa-spin');
                localStorage.setItem('padrillosui', JSON.stringify(padrillosui));
                $(function () {
                    $('#padre_hrs').autocomplete({
                        source: padrillosui
                    });
                });
            });
        }
    };
    NuevoCaballoComponent.prototype.cargarMadrillasUI = function (dato) {
        var _this = this;
        if (dato === 'borrar') {
            $('#act_mad').addClass(' fa-spin ');
            localStorage.removeItem('madrillasui');
        }
        if (localStorage.getItem('madrillasui') !== null) {
            this.madrillasui = JSON.parse(localStorage.getItem('madrillasui'));
            $(function () {
                $('#madre_hrs').autocomplete({
                    source: _this.madrillasui
                });
            });
        }
        else {
            this._caballosService.cargarMadrillasUI()
                .subscribe(function (madrillasui) {
                $('#act_mad').removeClass('fa-spin');
                localStorage.setItem('madrillasui', JSON.stringify(madrillasui));
                $(function () {
                    $('#madre_hrs').autocomplete({
                        source: madrillasui
                    });
                });
            });
        }
    };
    NuevoCaballoComponent = __decorate([
        core_1.Component({
            selector: 'app-nuevo-caballo',
            templateUrl: './nuevo-caballo.component.html',
            styleUrls: ['./nuevo-caballo.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            caballos_service_1.CaballosService,
            http_1.HttpClient,
            ngx_toastr_1.ToastrService])
    ], NuevoCaballoComponent);
    return NuevoCaballoComponent;
}());
exports.NuevoCaballoComponent = NuevoCaballoComponent;
//# sourceMappingURL=nuevo-caballo.component.js.map