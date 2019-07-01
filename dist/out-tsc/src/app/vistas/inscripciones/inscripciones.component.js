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
var router_1 = require("@angular/router");
var caballos_service_1 = require("../../servicios/caballos.service");
var InscripcionesComponent = /** @class */ (function () {
    function InscripcionesComponent(router, activatedRoute, _caballoService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._caballoService = _caballoService;
        this.carreras = [];
        this.hipodromos = [];
        this.caballos = [];
        this.jinetes = [];
        this.entrenadores = [];
    }
    InscripcionesComponent.prototype.ngOnInit = function () {
        this.carreras = JSON.parse(localStorage.getItem('carreras'));
        this.cargarCarreras();
        this.hipodromos = JSON.parse(localStorage.getItem('hipodromos'));
        this.cargarHipodromos();
        this.cargarCaballosUI();
    };
    InscripcionesComponent.prototype.cargarCarreras = function () {
        var _this = this;
        this._caballoService.cargarCarreras('todas')
            .subscribe(function (resp) {
            _this.carreras = resp.carreras;
            localStorage.setItem('carreras', JSON.stringify(resp.carreras));
        });
    };
    InscripcionesComponent.prototype.cargarHipodromos = function () {
        var _this = this;
        this._caballoService.cargarHipodromos()
            .subscribe(function (hipodromos) {
            _this.hipodromos = hipodromos;
            localStorage.setItem('hipodromos', JSON.stringify(hipodromos));
        });
    };
    InscripcionesComponent.prototype.cargarCaballosUI = function () {
        var _this = this;
        this._caballoService.cargarCaballosUI()
            .subscribe(function (caballosui) {
            _this.caballosui = caballosui;
            localStorage.setItem('caballosui', JSON.stringify(caballosui));
            $(function () {
                $('#autocc').val('Hola');
                $('#autocc').autocomplete({
                    source: caballosui
                });
            });
        });
    };
    InscripcionesComponent.prototype.abrirCarrera = function (id) {
        $(function () {
            $('#' + id + '_id').toggle();
            if ($('#carr_' + id).hasClass('lc_lineal') === true) {
                $('#carr_' + id).removeClass('lc_lineal');
                $('#tt_' + id).removeClass('lineal_tt');
                $('#mas_' + id).removeClass('siver');
            }
            else {
                $('#carr_' + id).addClass(' lc_lineal ');
                $('#tt_' + id).addClass('lineal_tt');
                $('#mas_' + id).addClass('siver');
            }
        });
    };
    InscripcionesComponent = __decorate([
        core_1.Component({
            selector: 'app-inscripciones',
            templateUrl: './inscripciones.component.html',
            styleUrls: ['./inscripciones.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            caballos_service_1.CaballosService])
    ], InscripcionesComponent);
    return InscripcionesComponent;
}());
exports.InscripcionesComponent = InscripcionesComponent;
//# sourceMappingURL=inscripciones.component.js.map