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
var caballos_service_1 = require("../../servicios/caballos.service");
var router_1 = require("@angular/router");
var JinetesComponent = /** @class */ (function () {
    function JinetesComponent(router, activatedRoute, _caballoService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._caballoService = _caballoService;
        this.jinetes = [];
        this.jienetes = [];
    }
    JinetesComponent.prototype.ngOnInit = function () {
        this.jinetesStorage();
    };
    JinetesComponent.prototype.cargarJinetes = function () {
        var _this = this;
        $('#spinact').addClass(' fa-spin ');
        this._caballoService.cargarJinetes()
            .subscribe(function (resp) {
            if (resp.status === 'correcto') {
                _this.jinetes = resp.jinetes;
                $('#spinact').removeClass('fa-spin');
                localStorage.setItem('jinetes', JSON.stringify(resp.jinetes));
                localStorage.setItem('act_jinetes', JSON.stringify(resp.actualizacion));
                _this._caballoService.act_jinetes = resp.actualizacion;
            }
        });
    };
    JinetesComponent.prototype.jinetesStorage = function () {
        if (localStorage.getItem('jinetes') !== null) {
            this.jinetes = JSON.parse(localStorage.getItem('jinetes'));
        }
        else {
            console.log('No hay jinetes');
        }
    };
    JinetesComponent.prototype.buscarJinete = function (nombre) {
        this.jienetes = [];
        if (nombre !== '') {
            var busqueda_1 = new RegExp(nombre, 'i');
            var jienetes = this.jinetes.filter(function (jinetes) { return busqueda_1.test(jinetes.nombre); });
            this.jienetes = jienetes;
        }
    };
    JinetesComponent = __decorate([
        core_1.Component({
            selector: 'app-jinetes',
            templateUrl: './jinetes.component.html',
            styleUrls: ['./jinetes.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            caballos_service_1.CaballosService])
    ], JinetesComponent);
    return JinetesComponent;
}());
exports.JinetesComponent = JinetesComponent;
//# sourceMappingURL=jinetes.component.js.map