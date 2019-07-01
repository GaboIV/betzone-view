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
var CarrerasComponent = /** @class */ (function () {
    function CarrerasComponent(router, activatedRoute, _caballoService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._caballoService = _caballoService;
        this.carreras = [];
        this.hipodromos = [];
    }
    CarrerasComponent.prototype.ngOnInit = function () {
        this.carreras = JSON.parse(localStorage.getItem('carreras'));
        this.cargarCarreras();
        this.hipodromos = JSON.parse(localStorage.getItem('hipodromos'));
        this.cargarHipodromos();
    };
    CarrerasComponent.prototype.cargarCarreras = function () {
        var _this = this;
        this._caballoService.cargarCarreras('todas')
            .subscribe(function (resp) {
            _this.carreras = resp.carreras;
            localStorage.setItem('carreras', JSON.stringify(resp.carreras));
        });
    };
    CarrerasComponent.prototype.cargarHipodromos = function () {
        var _this = this;
        this._caballoService.cargarHipodromos()
            .subscribe(function (hipodromos) {
            _this.hipodromos = hipodromos;
            localStorage.setItem('hipodromos', JSON.stringify(hipodromos));
        });
    };
    CarrerasComponent = __decorate([
        core_1.Component({
            selector: 'app-carreras',
            templateUrl: './carreras.component.html',
            styleUrls: ['./carreras.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            caballos_service_1.CaballosService])
    ], CarrerasComponent);
    return CarrerasComponent;
}());
exports.CarrerasComponent = CarrerasComponent;
//# sourceMappingURL=carreras.component.js.map