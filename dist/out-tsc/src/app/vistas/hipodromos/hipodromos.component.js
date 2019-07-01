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
var hipodromo_1 = require("../../modelos/hipodromo");
var router_1 = require("@angular/router");
var caballos_service_1 = require("../../servicios/caballos.service");
var ngx_toastr_1 = require("ngx-toastr");
var HipodromosComponent = /** @class */ (function () {
    function HipodromosComponent(router, activatedRoute, _caballoService, toastr) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._caballoService = _caballoService;
        this.toastr = toastr;
        this.hipodromos = [];
        this.hipodromo = new hipodromo_1.Hipodromo('', '', '', '', '');
        this.hipos = [];
        this.nuevo = null;
    }
    HipodromosComponent.prototype.ngOnInit = function () {
        this.hipodromosStorage();
    };
    HipodromosComponent.prototype.hipodromosStorage = function () {
        if (localStorage.getItem('hipodromos') !== null) {
            this.hipodromos = JSON.parse(localStorage.getItem('hipodromos'));
        }
        else {
            console.log('No hay hipodromos');
        }
    };
    HipodromosComponent.prototype.cargarHipodromos = function () {
        var _this = this;
        $('#spinact').addClass(' fa-spin ');
        this._caballoService.cargarHipodromos()
            .subscribe(function (resp) {
            if (resp.status === 'correcto') {
                _this.hipodromos = resp.hipodromos;
                $('#spinact').removeClass('fa-spin');
                localStorage.setItem('hipodromos', JSON.stringify(resp.hipodromos));
                localStorage.setItem('act_hipodromos', JSON.stringify(resp.actualizacion));
                _this._caballoService.act_hipodromos = resp.actualizacion;
            }
        });
    };
    HipodromosComponent.prototype.buscarHipodromo = function (descripcion) {
        this.hipos = [];
        if (descripcion !== '') {
            var busqueda_1 = new RegExp(descripcion, 'i');
            var hipos = this.hipodromos.filter(function (hipodromos) { return busqueda_1.test(hipodromos.descripcion); });
            this.hipos = hipos;
        }
    };
    HipodromosComponent.prototype.empezarNuevo = function () {
        this.nuevo = 'nuevo';
    };
    HipodromosComponent.prototype.resetPage = function () {
        this.nuevo = null;
    };
    HipodromosComponent.prototype.enviarDatos = function () {
        var _this = this;
        console.log(this.hipodromo);
        this._caballoService.crearHipodromo(this.hipodromo)
            .subscribe(function (res) {
            if (res.status === 'correcto') {
                _this.toastr.success('Correcto', 'Hipódromo guardado satisfactoriamente', {
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right'
                });
                _this.hipodromos = JSON.parse(localStorage.getItem('hipodromos'));
                _this.hipodromos.push(res.hipodromo);
                _this.hipodromos.sort(function (a, b) { return (a.descripcion > b.descripcion) ? 1 : ((b.descripcion > a.descripcion) ? -1 : 0); });
                localStorage.setItem('hipodromos', JSON.stringify(_this.hipodromos));
                _this.nuevo = null;
            }
            else {
            }
        });
    };
    HipodromosComponent = __decorate([
        core_1.Component({
            selector: 'app-hipodromos',
            templateUrl: './hipodromos.component.html',
            styleUrls: ['./hipodromos.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            caballos_service_1.CaballosService,
            ngx_toastr_1.ToastrService])
    ], HipodromosComponent);
    return HipodromosComponent;
}());
exports.HipodromosComponent = HipodromosComponent;
//# sourceMappingURL=hipodromos.component.js.map