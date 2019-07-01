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
var generales_service_1 = require("../../servicios/generales.service");
var AdmDepositosComponent = /** @class */ (function () {
    function AdmDepositosComponent(_generalesService) {
        this._generalesService = _generalesService;
    }
    AdmDepositosComponent.prototype.ngOnInit = function () {
        this.cargarPagos();
    };
    AdmDepositosComponent.prototype.cargarPagos = function () {
        var _this = this;
        this._generalesService.cargarPagos()
            .subscribe(function (resp) {
            _this.pagos = resp;
        });
    };
    AdmDepositosComponent.prototype.cambioStatus = function (pago, estatus) {
        this._generalesService.actualizarPago(pago.id_pago, estatus)
            .subscribe(function (resp) {
            if (resp.status === 'correcto') {
                pago.estatus = estatus;
            }
        });
    };
    AdmDepositosComponent = __decorate([
        core_1.Component({
            selector: 'app-adm-depositos',
            templateUrl: './adm-depositos.component.html',
            styleUrls: ['./adm-depositos.component.css']
        }),
        __metadata("design:paramtypes", [generales_service_1.GeneralesService])
    ], AdmDepositosComponent);
    return AdmDepositosComponent;
}());
exports.AdmDepositosComponent = AdmDepositosComponent;
//# sourceMappingURL=adm-depositos.component.js.map