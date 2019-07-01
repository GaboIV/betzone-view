"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CuotaPipe = /** @class */ (function () {
    function CuotaPipe() {
    }
    CuotaPipe.prototype.transform = function (valor, tipo) {
        if (!valor) {
            valor = '0.00';
        }
        switch (tipo) {
            case 'americano':
                valor = valor;
                break;
            case 'decimal':
                var datos = valor.split('/');
                var res = void 0;
                if (datos[1]) {
                    res = (datos[0] / datos[1]) + 1;
                }
                else {
                    res = (datos[0] * 1) + 1;
                }
                var res2 = res.toFixed(2);
                valor = res2;
                break;
            case 'europeo':
                valor = valor;
                break;
            case 'asiatico':
                valor = valor;
                break;
            default:
                valor = valor;
        }
        return valor;
    };
    CuotaPipe = __decorate([
        core_1.Pipe({
            name: 'cuota'
        })
    ], CuotaPipe);
    return CuotaPipe;
}());
exports.CuotaPipe = CuotaPipe;
//# sourceMappingURL=cuota.pipe.js.map