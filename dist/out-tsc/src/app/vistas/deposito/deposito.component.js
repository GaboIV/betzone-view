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
var inicio_sesion_service_1 = require("../../servicios/inicio-sesion.service");
var pago_modelo_1 = require("../../modelos/pago.modelo");
var generales_service_1 = require("../../servicios/generales.service");
var ngx_toastr_1 = require("ngx-toastr");
var router_1 = require("@angular/router");
var DepositoComponent = /** @class */ (function () {
    function DepositoComponent(router, _inicioSesion, _generalesService, toastr) {
        this.router = router;
        this._inicioSesion = _inicioSesion;
        this._generalesService = _generalesService;
        this.toastr = toastr;
        this.pago = new pago_modelo_1.Pago('', '', '', '', '', '', '', '4', '5', null);
        this.bancos = [];
        this.cuentas = [];
    }
    DepositoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pago.id_usuario = this._inicioSesion.usuario.id_usuario;
        this._generalesService.cargarCuentas()
            .subscribe(function (resp) {
            _this.cuentas = resp;
        });
        this._generalesService.cargarBancos()
            .subscribe(function (resp) {
            _this.bancos = resp;
        });
    };
    DepositoComponent.prototype.guardarPago = function (f) {
        var _this = this;
        if (f.invalid) {
            return;
        }
        this._generalesService.crearPago(this.pago)
            .subscribe(function (resp) {
            if (resp.status === 'correcto') {
                _this.toastr.success('Correcto', 'Pago guardado satisfactoriamente', {
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right'
                });
                _this.router.navigate(['/caballos']);
            }
        });
    };
    DepositoComponent = __decorate([
        core_1.Component({
            selector: 'app-deposito',
            templateUrl: './deposito.component.html',
            styleUrls: ['../opciones/historial/historial.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            inicio_sesion_service_1.InicioSesionService,
            generales_service_1.GeneralesService,
            ngx_toastr_1.ToastrService])
    ], DepositoComponent);
    return DepositoComponent;
}());
exports.DepositoComponent = DepositoComponent;
//# sourceMappingURL=deposito.component.js.map