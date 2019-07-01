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
var entrenadores_1 = require("../../modelos/entrenadores");
var router_1 = require("@angular/router");
var caballos_service_1 = require("../../servicios/caballos.service");
var http_1 = require("@angular/common/http");
var ngx_toastr_1 = require("ngx-toastr");
var NuevoEntrenadorComponent = /** @class */ (function () {
    function NuevoEntrenadorComponent(router, activatedRoute, _caballosService, http, toastr) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._caballosService = _caballosService;
        this.http = http;
        this.toastr = toastr;
        this.entrenador = new entrenadores_1.Entrenador('', 0, '', '');
        this.mostrarError = false;
    }
    NuevoEntrenadorComponent.prototype.ngOnInit = function () {
        $('#name_hrs').focus();
    };
    NuevoEntrenadorComponent.prototype.enviarDatos = function () {
        var _this = this;
        this._caballosService.crearEntrenador(this.entrenador)
            .subscribe(function (res) {
            if (res.status === 'correcto') {
                _this.entrenadores = JSON.parse(localStorage.getItem('entrenadores'));
                _this.entrenadores.push(res.entrenador);
                _this.entrenadores.sort(function (a, b) { return (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0); });
                localStorage.setItem('entrenadores', JSON.stringify(_this.entrenadores));
                _this.toastr.success('Correcto', 'Entrenador guardado satisfactoriamente', {
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right'
                });
                _this.router.navigate(['/entrenadores']);
            }
            else {
            }
        });
    };
    NuevoEntrenadorComponent = __decorate([
        core_1.Component({
            selector: 'app-nuevo-entrenador',
            templateUrl: './nuevo-entrenador.component.html',
            styleUrls: ['./nuevo-entrenador.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            caballos_service_1.CaballosService,
            http_1.HttpClient,
            ngx_toastr_1.ToastrService])
    ], NuevoEntrenadorComponent);
    return NuevoEntrenadorComponent;
}());
exports.NuevoEntrenadorComponent = NuevoEntrenadorComponent;
//# sourceMappingURL=nuevo-entrenador.component.js.map