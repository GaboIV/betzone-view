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
var app_routes_1 = require("../app.routes");
var pipes_module_1 = require("../pipes/pipes.module");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var nacionalidades_component_1 = require("./nacionalidades/nacionalidades.component");
var tipo_apuestas_component_1 = require("./tipo-apuestas/tipo-apuestas.component");
var actualizaciones_component_1 = require("./actualizaciones/actualizaciones.component");
var partidos_component_1 = require("./partidos/partidos.component");
var agregar_liga_component_1 = require("./agregar-liga/agregar-liga.component");
var registro_component_1 = require("./registro/registro.component");
var activacion_component_1 = require("./activacion/activacion.component");
var caballos_component_1 = require("./caballos/caballos.component");
var ngx_malihu_scrollbar_1 = require("ngx-malihu-scrollbar");
var jinetes_component_1 = require("./jinetes/jinetes.component");
var entrenadores_component_1 = require("./entrenadores/entrenadores.component");
var haras_component_1 = require("./haras/haras.component");
var studs_component_1 = require("./studs/studs.component");
var hipodromos_component_1 = require("./hipodromos/hipodromos.component");
var carreras_component_1 = require("./carreras/carreras.component");
var inscripciones_component_1 = require("./inscripciones/inscripciones.component");
var nuevo_caballo_component_1 = require("./caballos/nuevo-caballo.component");
var nuevo_jinete_component_1 = require("./jinetes/nuevo-jinete.component");
var nuevo_entrenador_component_1 = require("./entrenadores/nuevo-entrenador.component");
var agregar_haras_component_1 = require("./haras/agregar-haras.component");
var nuevo_stud_component_1 = require("./studs/nuevo-stud.component");
var nuevo_carrera_component_1 = require("./carreras/nuevo-carrera.component");
var nueva_inscripcion_component_1 = require("./inscripciones/nueva-inscripcion.component");
var historial_component_1 = require("./opciones/historial/historial.component");
var resultados_component_1 = require("./resultados/resultados.component");
var deposito_component_1 = require("./deposito/deposito.component");
var bancos_component_1 = require("./bancos/bancos.component");
var mi_cuenta_component_1 = require("./mi-cuenta/mi-cuenta.component");
var promociones_component_1 = require("./promociones/promociones.component");
var mensajes_component_1 = require("./mensajes/mensajes.component");
var partido_component_1 = require("./partidos/partido.component");
var usuarios_component_1 = require("./usuarios/usuarios.component");
var noticias_component_1 = require("./noticias/noticias.component");
var estadisticas_component_1 = require("./estadisticas/estadisticas.component");
var adm_depositos_component_1 = require("./adm-depositos/adm-depositos.component");
var changelog_component_1 = require("./changelog/changelog.component");
var menu_caballos_component_1 = require("../comun/componentes/menu-caballos/menu-caballos.component");
var carrera_component_1 = require("./carreras/carrera.component");
var ngx_sweetalert2_1 = require("@toverux/ngx-sweetalert2");
var ver_carrera_component_1 = require("./carreras/ver-carrera.component");
var cuotas_component_1 = require("../comun/componentes/cuotas/cuotas.component");
var ver_partido_component_1 = require("./partidos/ver-partido.component");
var VistasModule = /** @class */ (function () {
    function VistasModule() {
    }
    VistasModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                pipes_module_1.PipesModule,
                app_routes_1.APP_ROUTES,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                ngx_malihu_scrollbar_1.MalihuScrollbarModule.forRoot(),
                ngx_sweetalert2_1.SweetAlert2Module.forRoot()
            ],
            declarations: [
                nacionalidades_component_1.NacionalidadesComponent,
                tipo_apuestas_component_1.TipoApuestasComponent,
                actualizaciones_component_1.ActualizacionesComponent,
                partidos_component_1.PartidosComponent,
                agregar_liga_component_1.AgregarLigaComponent,
                registro_component_1.RegistroComponent,
                activacion_component_1.ActivacionComponent,
                caballos_component_1.CaballosComponent,
                jinetes_component_1.JinetesComponent,
                entrenadores_component_1.EntrenadoresComponent,
                haras_component_1.HarasComponent,
                studs_component_1.StudsComponent,
                hipodromos_component_1.HipodromosComponent,
                carreras_component_1.CarrerasComponent,
                inscripciones_component_1.InscripcionesComponent,
                nuevo_caballo_component_1.NuevoCaballoComponent,
                nuevo_jinete_component_1.NuevoJineteComponent,
                nuevo_entrenador_component_1.NuevoEntrenadorComponent,
                agregar_haras_component_1.AgregarHarasComponent,
                nuevo_stud_component_1.NuevoStudComponent,
                nuevo_carrera_component_1.NuevoCarreraComponent,
                nueva_inscripcion_component_1.NuevaInscripcionComponent,
                historial_component_1.HistorialComponent,
                resultados_component_1.ResultadosComponent,
                deposito_component_1.DepositoComponent,
                bancos_component_1.BancosComponent,
                mi_cuenta_component_1.MiCuentaComponent,
                promociones_component_1.PromocionesComponent,
                mensajes_component_1.MensajesComponent,
                partido_component_1.PartidoComponent,
                usuarios_component_1.UsuariosComponent,
                noticias_component_1.NoticiasComponent,
                estadisticas_component_1.EstadisticasComponent,
                adm_depositos_component_1.AdmDepositosComponent,
                changelog_component_1.ChangelogComponent,
                menu_caballos_component_1.MenuCaballosComponent,
                carrera_component_1.CarreraComponent,
                ver_carrera_component_1.VerCarreraComponent,
                cuotas_component_1.CuotasComponent,
                ver_partido_component_1.VerPartidoComponent
            ],
            exports: [menu_caballos_component_1.MenuCaballosComponent, cuotas_component_1.CuotasComponent]
        })
    ], VistasModule);
    return VistasModule;
}());
exports.VistasModule = VistasModule;
//# sourceMappingURL=vistas.module.js.map