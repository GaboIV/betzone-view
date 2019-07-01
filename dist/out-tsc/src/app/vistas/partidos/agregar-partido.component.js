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
var deportes_service_1 = require("../../servicios/deportes.service");
var partidos_service_1 = require("src/app/servicios/partidos.service");
var equipos_service_1 = require("src/app/servicios/equipos.service");
var partido_1 = require("src/app/modelos/partido");
var sweetalert2_1 = require("sweetalert2");
var AgregarPartidoComponent = /** @class */ (function () {
    function AgregarPartidoComponent(_deportesService, _partidosService, _equipoService) {
        this._deportesService = _deportesService;
        this._partidosService = _partidosService;
        this._equipoService = _equipoService;
        this.selectMostrar = '';
        this.depor = [];
        this.lig = [];
        this.eq1 = [];
        this.eq2 = [];
        this.eq3 = [];
        this.tipoCuota = '1';
        this.partido = new partido_1.Partido('', '', '0', null, '', '', '', '', '', '', '0', '', [], '', '', [], '', '');
    }
    AgregarPartidoComponent.prototype.ngOnInit = function () {
        this.cargarDeportes();
    };
    AgregarPartidoComponent.prototype.cargarDeportes = function () {
        var _this = this;
        this._deportesService.cargarDeportes()
            .subscribe(function (deportes) {
            _this.deportes = deportes;
            _this.depor = deportes;
        });
    };
    AgregarPartidoComponent.prototype.seleccionDeporte = function (seleccion, nombre) {
        var _this = this;
        this.partido.id_categoria = seleccion;
        this.partido.id_liga = null;
        $('#ipt_liga').val('');
        this.partido.descripcion = [];
        this.partido.equipos = [];
        $('.select_equipo').val('');
        $('.select_div').val('');
        this.selectMostrar = '';
        this.ligas = null;
        $('#ipt_deporte').val(nombre);
        this._deportesService.seleccionDeporte(seleccion)
            .subscribe(function (ligas) {
            _this.ligas = ligas;
            _this.lig = ligas;
        });
    };
    AgregarPartidoComponent.prototype.cargarEquipos = function (liga, nombre) {
        var _this = this;
        this.partido.id_liga = liga;
        $('#ipt_liga').val(nombre);
        this.partido.descripcion = [];
        this.partido.equipos = [];
        $('.select_equipo').val('');
        $('.select_div').val('');
        this.selectMostrar = '';
        this._deportesService.cargarEquipos(liga)
            .subscribe(function (resp) {
            _this.equipos = resp.equiposui;
            _this.eq1 = resp.equiposui;
            _this.eq2 = resp.equiposui;
            _this.eq3 = resp.equiposui;
        });
    };
    AgregarPartidoComponent.prototype.enviarDatos = function (f) {
        var _this = this;
        this.partido.equipos[0] = $('#ipt_eq1').val();
        this.partido.equipos[1] = $('#ipt_eq2').val();
        if (this.tipoCuota === '2') {
            this.partido.descripcion[0] = $('#div_e1').val();
            this.partido.descripcion[1] = $('#div_e2').val();
        }
        if (this.tipoCuota === '1') {
            this.partido.descripcion[0] = this.partido.descripcion[3];
            this.partido.descripcion[1] = this.partido.descripcion[4];
        }
        if ($('#ipt_eq3').val() !== '') {
            this.partido.equipos[2] = $('#ipt_eq3').val();
            if (this.tipoCuota === '2') {
                this.partido.descripcion[2] = $('#div_e3').val();
            }
            if (this.tipoCuota === '1') {
                this.partido.descripcion[2] = this.partido.descripcion[5];
            }
        }
        var swalWithBootstrapButtons = sweetalert2_1.default.mixin({});
        swalWithBootstrapButtons({
            title: '¿Deseas enviar estos datos?',
            // tslint:disable-next-line:max-line-length
            html: 'Equipo 1: ' + this.partido.equipos[0] + ' (' + this.partido.descripcion[0] + ')<br> Equipo 2: ' + this.partido.equipos[1] + ' (' + this.partido.descripcion[1] + ')<br> Equipo 3: ' + this.partido.equipos[2] + ' (' + this.partido.descripcion[2] + ')',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, enviar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                _this._partidosService.crearPartido(_this.partido)
                    .subscribe(function (resp) {
                    if (resp.status === 'correcto') {
                        swalWithBootstrapButtons('¡Partido agregado!', 'Los datos se han guardado correctamente', 'success');
                        _this.partido.equipos = [];
                        _this.partido.descripcion = [];
                    }
                    if (resp.status === 'existe') {
                        sweetalert2_1.default('Partido existente', resp.mensaje, 'info');
                    }
                });
            }
            else if (result.dismiss === sweetalert2_1.default.DismissReason.cancel) {
            }
        });
    };
    AgregarPartidoComponent.prototype.gcd = function (a, b) {
        if (b < 0.0000001) {
            return a;
        }
        return this.gcd(b, Math.floor(a % b));
    };
    AgregarPartidoComponent.prototype.cuotaDecimal = function (valor, i) {
        if (this.tipoCuota === '2') {
            var datos = valor.split('/');
            var res = void 0;
            if (datos[1]) {
                res = (datos[0] / datos[1]) + 1;
            }
            else {
                res = (datos[0] * 1) + 1;
            }
            var res2 = res.toFixed(2);
            var ni = i + 3;
            this.partido.descripcion[ni] = res2;
        }
        if (this.tipoCuota === '1') {
            var datos = (valor - 1).toFixed(3);
            var len = datos.toString().length - 2;
            var denominator = Math.pow(10, len);
            var numerator = parseFloat(datos) * denominator;
            var divisor = this.gcd(numerator, denominator);
            numerator /= divisor;
            denominator /= divisor;
            var fraq = Math.floor(numerator) + '/' + Math.floor(denominator);
            var ni = i + 3;
            this.partido.descripcion[ni] = fraq;
        }
    };
    AgregarPartidoComponent.prototype.clickedInside = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
    };
    AgregarPartidoComponent.prototype.clickedOutside = function ($event) {
        if ($('.select_form').is(':focus')) {
        }
        else {
            this.selectMostrar = '';
        }
    };
    AgregarPartidoComponent.prototype.seleccionCuota = function (cuota, nombre) {
        this.tipoCuota = cuota;
        this.selectMostrar = '';
        $('#ipt_cuota').val(nombre);
    };
    AgregarPartidoComponent.prototype.seleccionEquipo = function (id_equipo, nombre, i) {
        $('#ipt_eq' + i).val(nombre);
        this.selectMostrar = '';
    };
    AgregarPartidoComponent.prototype.buscarDeporte = function (descripcion) {
        this.depor = [];
        if (descripcion !== '') {
            var busqueda_1 = new RegExp(descripcion, 'i');
            var depor = this.deportes.filter(function (deportes) { return busqueda_1.test(deportes.descripcion); });
            this.depor = depor;
        }
        else {
            this.depor = this.deportes;
        }
    };
    AgregarPartidoComponent.prototype.buscarLiga = function (descripcion) {
        this.lig = [];
        if (descripcion !== '') {
            var busqueda_2 = new RegExp(descripcion, 'i');
            var lig = this.ligas.filter(function (ligas) { return busqueda_2.test(ligas.nombre_liga); });
            this.lig = lig;
        }
        else {
            this.lig = this.ligas;
        }
    };
    AgregarPartidoComponent.prototype.buscarEquipo1 = function (descripcion, i) {
        this.eq1 = [];
        if (descripcion !== '') {
            var busqueda_3 = new RegExp(descripcion, 'i');
            var eq1 = this.equipos.filter(function (equipos) { return busqueda_3.test(equipos.nombre_equipo); });
            this.eq1 = eq1;
        }
        else {
            this.eq1 = this.equipos;
        }
    };
    AgregarPartidoComponent.prototype.buscarEquipo2 = function (descripcion, i) {
        this.eq2 = [];
        if (descripcion !== '') {
            var busqueda_4 = new RegExp(descripcion, 'i');
            var eq2 = this.equipos.filter(function (equipos) { return busqueda_4.test(equipos.nombre_equipo); });
            this.eq2 = eq2;
        }
        else {
            this.eq2 = this.equipos;
        }
    };
    AgregarPartidoComponent.prototype.buscarEquipo3 = function (descripcion, i) {
        this.eq3 = [];
        if (descripcion !== '') {
            var busqueda_5 = new RegExp(descripcion, 'i');
            var eq3 = this.equipos.filter(function (equipos) { return busqueda_5.test(equipos.nombre_equipo); });
            this.eq3 = eq3;
        }
        else {
            this.eq3 = this.equipos;
        }
    };
    __decorate([
        core_1.HostListener('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AgregarPartidoComponent.prototype, "clickedOutside", null);
    AgregarPartidoComponent = __decorate([
        core_1.Component({
            selector: 'app-agregar-partido',
            templateUrl: './agregar-partido.component.html',
            styleUrls: ['./agregar-partido.component.css']
        }),
        __metadata("design:paramtypes", [deportes_service_1.DeportesService,
            partidos_service_1.PartidosService,
            equipos_service_1.EquiposService])
    ], AgregarPartidoComponent);
    return AgregarPartidoComponent;
}());
exports.AgregarPartidoComponent = AgregarPartidoComponent;
//# sourceMappingURL=agregar-partido.component.js.map