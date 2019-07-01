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
var EntrenadoresComponent = /** @class */ (function () {
    function EntrenadoresComponent(router, activatedRoute, _caballoService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._caballoService = _caballoService;
        this.entrenadores = [];
        this.entrenados = [];
    }
    EntrenadoresComponent.prototype.ngOnInit = function () {
        this.entrenadoresStorage();
    };
    EntrenadoresComponent.prototype.entrenadoresStorage = function () {
        if (localStorage.getItem('entrenadores') !== null) {
            this.entrenadores = JSON.parse(localStorage.getItem('entrenadores'));
        }
        else {
            console.log('No hay entrenadores');
        }
    };
    EntrenadoresComponent.prototype.buscarEntrenadores = function (nombre) {
        this.entrenados = [];
        if (nombre !== '') {
            var busqueda_1 = new RegExp(nombre, 'i');
            var entrenados = this.entrenadores.filter(function (entrenador) { return busqueda_1.test(entrenador.nombre); });
            this.entrenados = entrenados;
        }
    };
    EntrenadoresComponent.prototype.cargarEntrenadores = function () {
        var _this = this;
        $('#spinact').addClass(' fa-spin ');
        this._caballoService.cargarEntrenadores()
            .subscribe(function (resp) {
            if (resp.status === 'correcto') {
                _this.entrenadores = resp.entrenadores;
                $('#spinact').removeClass('fa-spin');
                localStorage.setItem('entrenadores', JSON.stringify(resp.entrenadores));
                localStorage.setItem('act_entrenadores', JSON.stringify(resp.actualizacion));
                _this._caballoService.act_entrenadores = resp.actualizacion;
            }
        });
    };
    EntrenadoresComponent = __decorate([
        core_1.Component({
            selector: 'app-entrenadores',
            templateUrl: './entrenadores.component.html',
            styleUrls: ['./entrenadores.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            caballos_service_1.CaballosService])
    ], EntrenadoresComponent);
    return EntrenadoresComponent;
}());
exports.EntrenadoresComponent = EntrenadoresComponent;
//# sourceMappingURL=entrenadores.component.js.map