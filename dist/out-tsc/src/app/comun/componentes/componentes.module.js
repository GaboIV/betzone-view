"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var cabecera_component_1 = require("./cabecera/cabecera.component");
var sub_menu_component_1 = require("./sub-menu/sub-menu.component");
var router_1 = require("@angular/router");
var pipes_module_1 = require("../../pipes/pipes.module");
var ComponentesModule = /** @class */ (function () {
    function ComponentesModule() {
    }
    ComponentesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                pipes_module_1.PipesModule
            ],
            declarations: [cabecera_component_1.CabeceraComponent, sub_menu_component_1.SubMenuComponent],
            exports: [cabecera_component_1.CabeceraComponent, sub_menu_component_1.SubMenuComponent]
        })
    ], ComponentesModule);
    return ComponentesModule;
}());
exports.ComponentesModule = ComponentesModule;
//# sourceMappingURL=componentes.module.js.map