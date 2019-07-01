"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var link_1 = require("../comun/link");
var ImagenPipe = /** @class */ (function () {
    function ImagenPipe() {
    }
    ImagenPipe.prototype.transform = function (img, tipo) {
        var url = link_1.URL_IMAGEN + '';
        if (!img) {
            return url + '/equipos/xxx';
        }
        switch (tipo) {
            case 'equipo':
                url += '/equipos/' + img;
                break;
            case 'liga':
                url += '/ligas/' + img;
                break;
            case 'nacionalidad':
                url += '/nacionalidades/' + img;
                break;
            case 'usuario':
                url += '/usuarios/' + img;
                break;
            case 'partido':
                url += '/partidos/' + img;
                break;
            case 'categoria':
                url += '/categorias/' + img;
                break;
            case 'stud':
                url += '/studs/' + img;
                break;
            default:
                console.log('Tipo de imagen no válido');
                url += '/equipo/xxx';
        }
        return url;
    };
    ImagenPipe = __decorate([
        core_1.Pipe({
            name: 'imagen'
        })
    ], ImagenPipe);
    return ImagenPipe;
}());
exports.ImagenPipe = ImagenPipe;
//# sourceMappingURL=imagen.pipe.js.map