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
var inicio_sesion_service_1 = require("src/app/servicios/inicio-sesion.service");
var sweetalert2_1 = require("sweetalert2");
var CuotasComponent = /** @class */ (function () {
    function CuotasComponent(_inicioSesion) {
        this._inicioSesion = _inicioSesion;
        this.esperando = false;
        this.selecciones = [];
        this.selecciones2 = [];
        this.cuota = 1;
        this.aganar = 0;
        this.montoapuesta = 0;
        this.wines = '';
        this.apostado = 0;
    }
    CuotasComponent.prototype.ngOnInit = function () {
        this.tipo = localStorage.getItem('tiposeleccion');
        if (this.tipo !== null) {
            if (this.tipo === '27') {
                this.selecciones = JSON.parse(localStorage.getItem('selecciones'));
            }
            if (this.tipo === '2x') {
                this.selecciones2 = JSON.parse(localStorage.getItem('selecciones'));
            }
        }
        this.obtenerSelecciones();
    };
    CuotasComponent.prototype.removerSel = function (id_sel) {
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
        this._inicioSesion.borrarSel(id_sel)
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
            if (resp.status === 'success') {
                _this.obtenerSelecciones();
            }
        });
    };
    CuotasComponent.prototype.obtenerSelecciones = function () {
        var _this = this;
        this._inicioSesion.obtenerSelecciones()
            .subscribe(function (resp) {
            if (resp.selecciones) {
                if (resp.tipo === '2x') {
                    _this.selecciones = [];
                    _this.selecciones2 = resp.selecciones;
                    _this.cuota = resp.cuota;
                    _this.cambioApuesta();
                }
                else if (resp.tipo === '27') {
                    _this.selecciones2 = [];
                    _this.selecciones = resp.selecciones;
                }
                else if (resp.tipo === '') {
                    _this.selecciones = [];
                    _this.selecciones2 = [];
                }
            }
        });
    };
    CuotasComponent.prototype.cambioApuesta = function () {
        this.aganar = this.montoapuesta * this.cuota;
    };
    CuotasComponent.prototype.apostard = function () {
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
        this.query();
        this._inicioSesion.enviarTicketd(this.montoapuesta)
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
        });
    };
    CuotasComponent.prototype.query = function () {
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
    CuotasComponent.prototype.apostar = function () {
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
        this.query();
        this._inicioSesion.enviarTicket(this.montos)
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
        });
    };
    CuotasComponent = __decorate([
        core_1.Component({
            selector: 'app-cuotas',
            templateUrl: './cuotas.component.html',
            styleUrls: ['./cuotas.component.css']
        }),
        __metadata("design:paramtypes", [inicio_sesion_service_1.InicioSesionService])
    ], CuotasComponent);
    return CuotasComponent;
}());
exports.CuotasComponent = CuotasComponent;
//# sourceMappingURL=cuotas.component.js.map