"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MontosPipe = /** @class */ (function () {
    function MontosPipe() {
    }
    MontosPipe.prototype.transform = function (valor, tipo) {
        if (!valor) {
            valor = '0.00';
        }
        switch (tipo) {
            case 'normal':
                valor = valor;
                break;
            case 'decimal':
                var resultado = '';
                var nuevon = void 0;
                var j = void 0;
                var i = void 0;
                if (valor[0] === '-') {
                    // Cogemos el numero eliminando los posibles puntos que tenga, y sin
                    // el signo negativo
                    nuevon = valor.replace(/\./g, '').substring(1);
                }
                else {
                    // Cogemos el numero eliminando los posibles puntos que tenga
                    nuevon = valor.replace(/\./g, '');
                }
                // Si tiene decimales, se los quitamos al numero
                if (valor.indexOf(',') >= 0) {
                    nuevon = nuevon.substring(0, nuevon.indexOf(','));
                }
                // Ponemos un punto cada 3 caracteres
                for (i = nuevon.length - 1, j = 0; i >= 0; i--, j++) {
                    resultado = nuevon.charAt(i) + ((j > 0) && (j % 3 === 0) ? '.' : '') + resultado;
                }
                // Si tiene decimales, se lo añadimos al numero una vez forateado con
                // los separadores de miles
                if (valor.indexOf(',') >= 0) {
                    resultado += valor.substring(valor.indexOf(','));
                }
                else {
                    resultado += ',00';
                }
                if (valor[0] === '-') {
                    // Devolvemos el valor añadiendo al inicio el signo negativo
                    valor = '-' + resultado;
                }
                else {
                    valor = resultado;
                }
                break;
            default:
                valor = valor;
        }
        return valor;
    };
    MontosPipe = __decorate([
        core_1.Pipe({
            name: 'montos'
        })
    ], MontosPipe);
    return MontosPipe;
}());
exports.MontosPipe = MontosPipe;
//# sourceMappingURL=montos.pipe.js.map