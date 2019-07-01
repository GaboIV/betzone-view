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
var HarasComponent = /** @class */ (function () {
    function HarasComponent(router, activatedRoute, _caballoService, toastr) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._caballoService = _caballoService;
        this.toastr = toastr;
        this.haras = [];
        this.harias = [];
    }
    HarasComponent.prototype.ngOnInit = function () {
        this.harasStorage();
    };
    HarasComponent.prototype.harasStorage = function () {
        if (localStorage.getItem('haras') !== null) {
            this.haras = JSON.parse(localStorage.getItem('haras'));
        }
        else {
            console.log('No hay haras');
        }
    };
    HarasComponent.prototype.buscarHaras = function (descripcion) {
        this.harias = [];
        if (descripcion !== '') {
            var busqueda_1 = new RegExp(descripcion, 'i');
            var harias = this.haras.filter(function (hara) { return busqueda_1.test(hara.descripcion); });
            this.harias = harias;
        }
    };
    HarasComponent.prototype.cargarHaras = function () {
        var _this = this;
        $('#spinact').addClass(' fa-spin ');
        this._caballoService.cargarHaras()
            .subscribe(function (resp) {
            if (resp.status === 'correcto') {
                _this.haras = resp.haras;
                $('#spinact').removeClass('fa-spin');
                localStorage.setItem('haras', JSON.stringify(resp.haras));
                localStorage.setItem('act_haras', JSON.stringify(resp.actualizacion));
                _this._caballoService.act_haras = resp.actualizacion;
            }
        });
    };
    HarasComponent = __decorate([
        core_1.Component({
            selector: 'app-haras',
            templateUrl: './haras.component.html',
            styleUrls: ['./haras.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            caballos_service_1.CaballosService,
            ngx_toastr_1.ToastrService])
    ], HarasComponent);
    return HarasComponent;
}());
exports.HarasComponent = HarasComponent;
//# sourceMappingURL=haras.component.js.map