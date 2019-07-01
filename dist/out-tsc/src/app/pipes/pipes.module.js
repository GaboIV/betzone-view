"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var imagen_pipe_1 = require("./imagen.pipe");
var cuota_pipe_1 = require("./cuota.pipe");
var montos_pipe_1 = require("./montos.pipe");
var importantes_pipe_1 = require("./importantes.pipe");
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [
                imagen_pipe_1.ImagenPipe,
                cuota_pipe_1.CuotaPipe,
                montos_pipe_1.MontosPipe,
                importantes_pipe_1.ImportantesPipe
            ],
            exports: [
                imagen_pipe_1.ImagenPipe,
                montos_pipe_1.MontosPipe,
                importantes_pipe_1.ImportantesPipe,
                cuota_pipe_1.CuotaPipe
            ]
        })
    ], PipesModule);
    return PipesModule;
}());
exports.PipesModule = PipesModule;
//# sourceMappingURL=pipes.module.js.map