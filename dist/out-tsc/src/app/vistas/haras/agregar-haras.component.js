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
var haras_1 = require("../../modelos/haras");
var http_1 = require("@angular/common/http");
var caballos_service_1 = require("../../servicios/caballos.service");
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
var AgregarHarasComponent = /** @class */ (function () {
    function AgregarHarasComponent(router, activatedRoute, _caballosService, http, toastr) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._caballosService = _caballosService;
        this.http = http;
        this.toastr = toastr;
        this.haras = new haras_1.Haras('', '', '');
        this.mostrarError = false;
    }
    AgregarHarasComponent.prototype.ngOnInit = function () {
        $('#name_hrs').focus();
    };
    AgregarHarasComponent.prototype.enviarDatos = function () {
        var _this = this;
        this._caballosService.crearHaras(this.haras)
            .subscribe(function (res) {
            if (res.status === 'correcto') {
                _this.harass = JSON.parse(localStorage.getItem('haras'));
                _this.harass.push(res.haras);
                _this.harass.sort(function (a, b) { return (a.descripcion > b.descripcion) ? 1 : ((b.descripcion > a.descripcion) ? -1 : 0); });
                localStorage.setItem('haras', JSON.stringify(_this.harass));
                _this.toastr.success('Correcto', 'Haras guardado satisfactoriamente', {
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right'
                });
                _this.router.navigate(['/haras']);
            }
            else {
            }
        });
    };
    AgregarHarasComponent = __decorate([
        core_1.Component({
            selector: 'app-agregar-haras',
            templateUrl: './agregar-haras.component.html',
            styleUrls: ['./agregar-haras.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            caballos_service_1.CaballosService,
            http_1.HttpClient,
            ngx_toastr_1.ToastrService])
    ], AgregarHarasComponent);
    return AgregarHarasComponent;
}());
exports.AgregarHarasComponent = AgregarHarasComponent;
//# sourceMappingURL=agregar-haras.component.js.map