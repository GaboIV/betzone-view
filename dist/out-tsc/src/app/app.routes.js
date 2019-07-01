"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var importantes_component_1 = require("./vistas/importantes/importantes.component");
var equipos_component_1 = require("./vistas/equipos/equipos.component");
var noencontrado_component_1 = require("./vistas/noencontrado/noencontrado.component");
var ligas_component_1 = require("./vistas/ligas/ligas.component");
var nacionalidades_component_1 = require("./vistas/nacionalidades/nacionalidades.component");
var tipo_apuestas_component_1 = require("./vistas/tipo-apuestas/tipo-apuestas.component");
var actualizaciones_component_1 = require("./vistas/actualizaciones/actualizaciones.component");
var partidos_component_1 = require("./vistas/partidos/partidos.component");
var agregar_liga_component_1 = require("./vistas/agregar-liga/agregar-liga.component");
var registro_component_1 = require("./vistas/registro/registro.component");
var activacion_component_1 = require("./vistas/activacion/activacion.component");
var caballos_component_1 = require("./vistas/caballos/caballos.component");
var jinetes_component_1 = require("./vistas/jinetes/jinetes.component");
var entrenadores_component_1 = require("./vistas/entrenadores/entrenadores.component");
var haras_component_1 = require("./vistas/haras/haras.component");
var studs_component_1 = require("./vistas/studs/studs.component");
var hipodromos_component_1 = require("./vistas/hipodromos/hipodromos.component");
var carreras_component_1 = require("./vistas/carreras/carreras.component");
var inscripciones_component_1 = require("./vistas/inscripciones/inscripciones.component");
var nuevo_caballo_component_1 = require("./vistas/caballos/nuevo-caballo.component");
var nuevo_jinete_component_1 = require("./vistas/jinetes/nuevo-jinete.component");
var nuevo_entrenador_component_1 = require("./vistas/entrenadores/nuevo-entrenador.component");
var agregar_haras_component_1 = require("./vistas/haras/agregar-haras.component");
var nuevo_stud_component_1 = require("./vistas/studs/nuevo-stud.component");
var nuevo_carrera_component_1 = require("./vistas/carreras/nuevo-carrera.component");
var nueva_inscripcion_component_1 = require("./vistas/inscripciones/nueva-inscripcion.component");
var historial_component_1 = require("./vistas/opciones/historial/historial.component");
var resultados_component_1 = require("./vistas/resultados/resultados.component");
var deposito_component_1 = require("./vistas/deposito/deposito.component");
var bancos_component_1 = require("./vistas/bancos/bancos.component");
var mi_cuenta_component_1 = require("./vistas/mi-cuenta/mi-cuenta.component");
var promociones_component_1 = require("./vistas/promociones/promociones.component");
var mensajes_component_1 = require("./vistas/mensajes/mensajes.component");
var partido_component_1 = require("./vistas/partidos/partido.component");
var admin_guard_guard_1 = require("./guardias/admin-guard.guard");
var usuarios_component_1 = require("./vistas/usuarios/usuarios.component");
var noticias_component_1 = require("./vistas/noticias/noticias.component");
var estadisticas_component_1 = require("./vistas/estadisticas/estadisticas.component");
var adm_depositos_component_1 = require("./vistas/adm-depositos/adm-depositos.component");
var changelog_component_1 = require("./vistas/changelog/changelog.component");
var agregar_partido_component_1 = require("./vistas/partidos/agregar-partido.component");
var carrera_component_1 = require("./vistas/carreras/carrera.component");
var ver_carrera_component_1 = require("./vistas/carreras/ver-carrera.component");
var ver_partido_component_1 = require("./vistas/partidos/ver-partido.component");
var appRoutes = [
    { path: 'importantes/:id_categoria', component: importantes_component_1.ImportantesComponent },
    { path: 'equipos', component: equipos_component_1.EquiposComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'caballos', component: caballos_component_1.CaballosComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'resultados', component: resultados_component_1.ResultadosComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'nuevoCaballo', component: nuevo_caballo_component_1.NuevoCaballoComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'jinetes', component: jinetes_component_1.JinetesComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'nuevoJinete', component: nuevo_jinete_component_1.NuevoJineteComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'entrenadores', component: entrenadores_component_1.EntrenadoresComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'nuevoEntrenador', component: nuevo_entrenador_component_1.NuevoEntrenadorComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'haras', component: haras_component_1.HarasComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'nuevoHaras', component: agregar_haras_component_1.AgregarHarasComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'studs', component: studs_component_1.StudsComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'nuevoStud', component: nuevo_stud_component_1.NuevoStudComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'hipodromos', component: hipodromos_component_1.HipodromosComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'carreras', component: carreras_component_1.CarrerasComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'nuevaCarrera', component: nuevo_carrera_component_1.NuevoCarreraComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'inscripciones', component: inscripciones_component_1.InscripcionesComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'nuevaInscripcion/:id_carrera', component: nueva_inscripcion_component_1.NuevaInscripcionComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'ligas', component: ligas_component_1.LigasComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'agregarLiga', component: agregar_liga_component_1.AgregarLigaComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'agregarPartido', component: agregar_partido_component_1.AgregarPartidoComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'nacionalidades', component: nacionalidades_component_1.NacionalidadesComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'tipoApuestas', component: tipo_apuestas_component_1.TipoApuestasComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'actualizaciones', component: actualizaciones_component_1.ActualizacionesComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'partidos', component: partidos_component_1.PartidosComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'registro', component: registro_component_1.RegistroComponent },
    { path: 'historial/:id_historial', component: historial_component_1.HistorialComponent },
    { path: 'mensajes', component: mensajes_component_1.MensajesComponent },
    { path: 'activacion/:cod_act', component: activacion_component_1.ActivacionComponent },
    { path: 'deposito', component: deposito_component_1.DepositoComponent },
    { path: 'bancos', component: bancos_component_1.BancosComponent },
    { path: 'mi-cuenta', component: mi_cuenta_component_1.MiCuentaComponent },
    { path: 'promociones', component: promociones_component_1.PromocionesComponent },
    { path: 'usuarios', component: usuarios_component_1.UsuariosComponent },
    { path: 'noticias', component: noticias_component_1.NoticiasComponent },
    { path: 'estadisticas', component: estadisticas_component_1.EstadisticasComponent },
    { path: 'adm-depositos', component: adm_depositos_component_1.AdmDepositosComponent },
    { path: 'changelog', component: changelog_component_1.ChangelogComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'partido/:id_partido', component: partido_component_1.PartidoComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'carrera/:id_carrera', component: carrera_component_1.CarreraComponent, canActivate: [admin_guard_guard_1.AdminGuardGuard] },
    { path: 'verCarrera/:id_carrera', component: ver_carrera_component_1.VerCarreraComponent },
    { path: 'verPartido/:id_partido', component: ver_partido_component_1.VerPartidoComponent },
    { path: '',
        redirectTo: '/importantes/21',
        pathMatch: 'full' },
    { path: '**', component: noencontrado_component_1.NoencontradoComponent }
];
exports.APP_ROUTES = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routes.js.map