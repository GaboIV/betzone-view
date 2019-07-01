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
var ngx_toastr_1 = require("ngx-toastr");
var CaballosComponent = /** @class */ (function () {
    function CaballosComponent(router, activatedRoute, _caballoService, toastr) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._caballoService = _caballoService;
        this.toastr = toastr;
        this.caballos = [];
        this.mostrarEdit = false;
        this.pagina = 1;
        this.desactivar = 'disabled';
        this.caballio = [];
        this.haras = [];
        this.harass = [];
    }
    CaballosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.caballosStorage();
        this.cargarCaballosUI();
        if (localStorage.getItem('haras') !== null) {
            this.haras = JSON.parse(localStorage.getItem('haras'));
        }
        else {
            this._caballoService.cargarHaras()
                .subscribe(function (resp) {
                if (resp.status === 'correcto') {
                    _this.haras = resp.haras;
                    localStorage.setItem('haras', JSON.stringify(resp.haras));
                    localStorage.setItem('act_haras', JSON.stringify(resp.actualizacion));
                    _this._caballoService.act_haras = resp.actualizacion;
                }
            });
        }
    };
    CaballosComponent.prototype.cargarCaballos = function () {
        var _this = this;
        $('#spinact').addClass(' fa-spin ');
        this._caballoService.cargarCaballos()
            .subscribe(function (resp) {
            if (resp.status === 'correcto') {
                _this.caballos = resp.caballos;
                $('#spinact').removeClass('fa-spin');
                localStorage.setItem('caballos', JSON.stringify(resp.caballos));
                localStorage.setItem('act_caballos', JSON.stringify(resp.actualizacion));
                _this._caballoService.act_caballos = resp.actualizacion;
            }
        });
    };
    CaballosComponent.prototype.caballosStorage = function () {
        if (localStorage.getItem('caballos') !== null) {
            this.caballos = JSON.parse(localStorage.getItem('caballos'));
        }
        else {
            console.log('No hay caballos');
        }
    };
    CaballosComponent.prototype.cargarCaballosUI = function () {
        if (localStorage.getItem('caballosui') !== null) {
            this.caballosui = JSON.parse(localStorage.getItem('caballosui'));
        }
        else {
            this._caballoService.cargarCaballosUI()
                .subscribe(function (caballosui) {
                localStorage.setItem('caballosui', JSON.stringify(caballosui));
            });
        }
    };
    CaballosComponent.prototype.buscarCaballo = function (nombre) {
        this.caballio = [];
        if (nombre !== '') {
            var busqueda_1 = new RegExp(nombre, 'i');
            var caballio = this.caballos.filter(function (caballo) { return busqueda_1.test(caballo.nombre); });
            this.caballio = caballio;
        }
    };
    CaballosComponent.prototype.actualizarCaballo = function (caballo) {
        var _this = this;
        this._caballoService.actualizarCaballo(caballo)
            .subscribe(function (resp) {
            if (resp.status === 'correcto') {
                caballo.edad = resp.edad;
                var foundIndex = _this.caballos.findIndex(function (x) { return x.id_caballo === caballo.id_caballo; });
                _this.caballos[foundIndex] = caballo;
                localStorage.setItem('caballos', JSON.stringify(_this.caballos));
                _this.toastr.success('Correcto', resp.mensaje, {
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right'
                });
                console.log(resp.haras);
            }
            else {
                console.log(resp);
            }
        });
    };
    CaballosComponent.prototype.buscarHaras = function (descripcion, id_ins, index) {
        $('.bpad').slideUp('500');
        $('.bmad').slideUp('500');
        this.harass = [];
        if (descripcion !== '') {
            var busqueda_2 = new RegExp(descripcion, 'i');
            var harass = this.haras.filter(function (haras) { return busqueda_2.test(haras.descripcion); });
            this.harass = harass;
        }
        $('#bhar-' + id_ins).slideDown(500);
    };
    CaballosComponent.prototype.selHar = function (index, haras, id_ins) {
        this.caballos[index].id_haras = haras;
        $('#bhar-' + id_ins).hide(100);
        $('#hr-' + id_ins).html(haras.descripcion);
        console.log(this.caballos[index]);
        this.actualizarCaballo(this.caballos[index]);
    };
    CaballosComponent = __decorate([
        core_1.Component({
            selector: 'app-caballos',
            templateUrl: './caballos.component.html',
            styleUrls: ['./caballos.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            caballos_service_1.CaballosService,
            ngx_toastr_1.ToastrService])
    ], CaballosComponent);
    return CaballosComponent;
}());
exports.CaballosComponent = CaballosComponent;
//# sourceMappingURL=caballos.component.js.map