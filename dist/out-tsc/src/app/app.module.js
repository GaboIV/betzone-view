"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ngx_malihu_scrollbar_1 = require("ngx-malihu-scrollbar");
var app_component_1 = require("./app.component");
var componentes_module_1 = require("./comun/componentes/componentes.module");
var titulo_component_1 = require("./comun/componentes/cabecera/titulo.component");
var principal_component_1 = require("./vistas/principal/principal.component");
var importantes_component_1 = require("./vistas/importantes/importantes.component");
var equipos_component_1 = require("./vistas/equipos/equipos.component");
var noencontrado_component_1 = require("./vistas/noencontrado/noencontrado.component");
var app_routes_1 = require("./app.routes");
var servicios_modulo_1 = require("./servicios/servicios.modulo");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
var pipes_module_1 = require("./pipes/pipes.module");
var vistas_module_1 = require("./vistas/vistas.module");
var menu_component_1 = require("./comun/componentes/menu/menu.component");
var ligas_component_1 = require("./vistas/ligas/ligas.component");
var ngx_toastr_1 = require("ngx-toastr");
var agregar_partido_component_1 = require("./vistas/partidos/agregar-partido.component");
var ngx_sweetalert2_1 = require("@toverux/ngx-sweetalert2");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                titulo_component_1.TituloComponent,
                principal_component_1.PrincipalComponent,
                importantes_component_1.ImportantesComponent,
                equipos_component_1.EquiposComponent,
                noencontrado_component_1.NoencontradoComponent,
                menu_component_1.MenuComponent,
                ligas_component_1.LigasComponent,
                agregar_partido_component_1.AgregarPartidoComponent
            ],
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                platform_browser_1.BrowserModule,
                componentes_module_1.ComponentesModule,
                app_routes_1.APP_ROUTES,
                servicios_modulo_1.ServiciosModulo,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                pipes_module_1.PipesModule,
                vistas_module_1.VistasModule,
                ngx_malihu_scrollbar_1.MalihuScrollbarModule.forRoot(),
                ngx_toastr_1.ToastrModule.forRoot(),
                ngx_sweetalert2_1.SweetAlert2Module.forRoot()
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent],
            exports: [principal_component_1.PrincipalComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map