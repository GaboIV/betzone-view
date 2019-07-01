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
var router_1 = require("@angular/router");
var partidos_service_1 = require("../../servicios/partidos.service");
var caballos_service_1 = require("../../servicios/caballos.service");
var generales_service_1 = require("../../servicios/generales.service");
var inicio_sesion_service_1 = require("../../servicios/inicio-sesion.service");
var $ = require("jquery");
var platform_browser_1 = require("@angular/platform-browser");
var sweetalert2_1 = require("sweetalert2");
var ImportantesComponent = /** @class */ (function () {
    function ImportantesComponent(route, router, _partidosService, _generalesService, _caballoService, _inicioSesion, sanitizer) {
        this.route = route;
        this.router = router;
        this._partidosService = _partidosService;
        this._generalesService = _generalesService;
        this._caballoService = _caballoService;
        this._inicioSesion = _inicioSesion;
        this.sanitizer = sanitizer;
        this.apostado = 0;
        this.scrollbarOptions = { axis: 'x', theme: 'light', alwaysShowScrollbar: 1 };
        this.scrollbarOptions2 = { theme: 'dark-2', alwaysShowScrollbar: 1, scrollbarPosition: 'inside' };
        this.dias_carr = [];
        // tslint:disable-next-line:max-line-length
        this.envivo = '//sportstream365.com/viewer/frame/?game=1909202&tagz=LZJJzqNGAEaVHCJrVr@6pQQDBYWdlhUG_x7BNmawsRKhwhSYeSoGe5kr5BCRIuUCuUir@yC9TbzI5pOent7u@@NvdsrSUKB5nmYh@Pzvb8YP0q_f_fPt9z9POMQNbr5@790JqX6eTNqqbEhLGoxy8CpuZT7pYzzgZhI2KMeTX6LXztkZIwBh9kZQ9Jxr14XiE32QN_5y5cmquRCcfDAPyYkBrlu7HBQI2u4e2o2LjLp@sDY33RaXGq@sbeoE8lHWzfcswApmg1SV11rjMTDYA8n3pFGGq@cG2Ub73IjitO_LoigEcQYbYdqPG7F0HUmqdN@eOb2267psgVjG3BDT8W51oEHt3U6IdrGQmbeEzb11gU6WGV3zhdX0a83VbimDN1JsB7GQsvbN75@XB@g4wzy0Wn1osiQKy8EJFJXUjPq@dYewUsDa2FrC8dHbj2MrHhKu5Z6xePaXwBWBGyYZw10tca1zBT_ta85a7AJptQ9BSCAbGN2JS@quX0qH9YzxTISmWwQel8FUlMBhNW0vGAkZhVEEsXyBzrVcDMBU4KHe5MzsuEpStjNwCWOgt93@NALGZW3Nc6uCz1Uc7CJ4PpnV1dbfrVxMXdShVWqMrqKG0ZW_Ho3DMdny6iU7LztlBVQubfNhuLtYSXXXW_CqXQpLKOd@4tesPjybSx2ObRyr6hgb@njqZAiQg7zWk2RjPn@7YxTgZs68oY6UVYYec_ZtiANynwuQedk4upM5JzB_2S1ufpIjXJAvjV4@4yxDE4FmqA_nuAjKoaX2FgVp9hP1Ysh_okbIf6TkqsrwGfu7mEwEINIAUh92a0vXfqSyOMXUCt_S8iOl3pvy9U2RoRkaCGBKsyxDmShETfx_9h8=&header=1&autoplay=1&width=348&height=200';
        this.liga_temp = 0;
        this.mstatus = null;
        this.dia_c = '';
        this.carrera_c = '';
        this.esperando = false;
    }
    ImportantesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this.dia_c = params.dia;
            _this.carrera_c = params.carrera;
        });
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.envivo);
        this.route.params
            .subscribe(function (parametros) {
            _this.id = parametros['id_categoria'];
            $('.ep_cada_cat').removeClass('seleccionadosport');
            $('#temp-' + _this.id).addClass(' seleccionadosport ');
            $('.spin_cat').removeClass('iconosport');
            $('#spin-' + _this.id).addClass(' iconosport ');
            if (parametros['id_categoria'] === '27') {
                _this._caballoService.cargarCarreras('todas')
                    .subscribe(function (resp) {
                    _this.carreras = resp.carreras;
                    _this.dias_carr = resp.dias;
                    _this.partidos = null;
                    if (_this.dia_c === undefined || _this.carrera_c === undefined) {
                        // tslint:disable-next-line:max-line-length
                        _this.router.navigate(['/importantes/27'], { queryParams: { 'dia': _this.dias_carr[0].dia, 'carrera': _this.carreras[0].numero } });
                    }
                });
            }
            else {
                _this._partidosService.partidosPorCategoria(_this.id, 'normal', '')
                    .subscribe(function (partidos) {
                    _this.partidos = partidos;
                    _this.carreras = null;
                });
            }
        });
        $('.mensaje_cp').hide();
        this.cargarDestacados();
        this.cargarCategoriasJuegos();
        this.usuario = this._inicioSesion.usuario;
        $('.ep_cada_cat').removeClass('seleccionadosport');
        $('#temp-' + this.id).addClass(' seleccionadosport ');
        $('.spin_cat').removeClass('iconosport');
        $('#spin-' + this.id).addClass(' iconosport ');
        this.scroll_cuot();
        this.query2();
        this.cargarEnVivo();
    };
    ImportantesComponent.prototype.query2 = function () {
        $('#iframejogo').click(function () {
            alert('Hola');
        });
    };
    ImportantesComponent.prototype.deleteFile = function () {
        var toast = sweetalert2_1.default.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
        });
        toast({
            type: 'success',
            title: 'Guardado'
        });
    };
    ImportantesComponent.prototype.scroll_cuot = function () {
        $(function () {
            $(window).scroll(function () {
                var ancho = $('.zona_cuota').width();
                if ($(this).scrollTop() > 137) {
                    $('.zona_cuota').addClass('fixed');
                    $('.zona_cuota').removeClass('unfixed');
                    $('.zona_cuota').width(ancho);
                }
                else {
                    $('.zona_cuota').removeClass('fixed');
                    $('.zona_cuota').addClass('unfixed');
                }
            });
        });
    };
    ImportantesComponent.prototype.check = function (id_liga) {
        if (this.liga_temp === id_liga) {
            return false;
        }
        else {
            this.liga_temp = id_liga;
            return true;
        }
    };
    ImportantesComponent.prototype.clase = function (valor, deporte, equipo) {
        if (valor === 3) {
            if (equipo === '35') {
                return 'ep_cada_logo ep_cada_central ep_empate_div';
            }
            return 'ep_cada_logo ep_cada_central';
        }
        if (valor === 2) {
            if (deporte === 24) {
                return 'ep_cada_logo ep_cada_pero_dos css_jugador';
            }
            else {
                return 'ep_cada_logo ep_cada_pero_dos css_jugador';
            }
        }
    };
    ImportantesComponent.prototype.queclase = function (equipos, categoria, id_equipo) {
        var clase = 'gen_imp_eq';
        var equipos_cant = equipos.length;
        if (equipos_cant === 2) {
            clase += ' eq_dos';
            if (categoria === '29' || categoria === '24') {
                clase += ' dato_eq';
            }
            if (equipos[0].pitcher !== false || equipos[0].pitcher !== false) {
                clase += ' dato_eq';
            }
        }
        if (equipos_cant === 3) {
            if (equipos[1].nombre === 'Empate') {
                if (id_equipo === '35') {
                    clase += ' eq_tres_emp';
                }
                else {
                    clase += ' eq_tres';
                }
            }
        }
        return clase;
    };
    ImportantesComponent.prototype.cargarDestacados = function () {
        var _this = this;
        this._partidosService.cargarDestacados()
            .subscribe(function (destacados) { return _this.destacados = destacados; });
    };
    ImportantesComponent.prototype.cargarCategoriasJuegos = function () {
        var _this = this;
        this._generalesService.cargarCategoriasJuegos()
            .subscribe(function (juegos) { return _this.juegos = juegos; });
    };
    ImportantesComponent.prototype.seleccionh = function (id_apuesta) {
        var _this = this;
        this.esperando = true;
        var toast = sweetalert2_1.default.mixin({
            toast: true,
            position: 'top-end'
        });
        toast({
            type: 'info',
            title: 'Enviando datos'
        });
        this._inicioSesion.seleccionh(id_apuesta, this._inicioSesion.usuario)
            .subscribe(function (resp) {
            _this.esperando = false;
            // tslint:disable-next-line:no-shadowed-variable
            var toast = sweetalert2_1.default.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000
            });
            toast({
                type: resp.status,
                title: resp.mstatus
            });
            _this.mstatus = resp.mstatus;
        });
    };
    ImportantesComponent.prototype.selecciond = function (id_apuesta, id_categoria) {
        var _this = this;
        this.esperando = true;
        var toast = sweetalert2_1.default.mixin({
            toast: true,
            position: 'top-end'
        });
        toast({
            type: 'info',
            title: 'Enviando datos'
        });
        this._inicioSesion.selecciond(id_apuesta, id_categoria, this._inicioSesion.usuario.id_usuario)
            .subscribe(function (resp) {
            _this.esperando = false;
            // tslint:disable-next-line:no-shadowed-variable
            var toast = sweetalert2_1.default.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000
            });
            toast({
                type: resp.status,
                title: resp.mstatus
            });
        });
    };
    ImportantesComponent.prototype.solohoy = function () {
        var _this = this;
        if (this.id === '27') {
            this._caballoService.cargarCarreras('hoy')
                .subscribe(function (resp) {
                _this.carreras = resp.carreras;
                _this.partidos = null;
            });
        }
        else {
            this._partidosService.partidosPorCategoria(this.id, 'hoy', '')
                .subscribe(function (partidos) {
                _this.partidos = partidos;
                _this.carreras = null;
            });
        }
    };
    ImportantesComponent.prototype.buscarEquipo = function (forma) {
        var _this = this;
        this._partidosService.partidosPorCategoria(this.id, 'normal', forma.busqueda)
            .subscribe(function (partidos) {
            _this.partidos = partidos;
            _this.carreras = null;
        });
    };
    ImportantesComponent.prototype.cargarEnVivo = function () {
        var _this = this;
        this._partidosService.cargarEnVivo()
            .subscribe(function (resp) {
            if (resp.status === 'correcto') {
                _this.envivo = resp.partidos[0].live_id;
                _this.regenerar(_this.envivo);
                _this.envivos = resp.partidos;
            }
        });
    };
    ImportantesComponent.prototype.regenerar = function (live_id) {
        // tslint:disable-next-line:max-line-length
        this.envivo = '//sportstream365.com/viewer/frame/?game=' + live_id + '&tagz=LZJJzqNGAEaVHCJrVr@6pQQDBYWdlhUG_x7BNmawsRKhwhSYeSoGe5kr5BCRIuUCuUir@yC9TbzI5pOent7u@@NvdsrSUKB5nmYh@Pzvb8YP0q_f_fPt9z9POMQNbr5@790JqX6eTNqqbEhLGoxy8CpuZT7pYzzgZhI2KMeTX6LXztkZIwBh9kZQ9Jxr14XiE32QN_5y5cmquRCcfDAPyYkBrlu7HBQI2u4e2o2LjLp@sDY33RaXGq@sbeoE8lHWzfcswApmg1SV11rjMTDYA8n3pFGGq@cG2Ub73IjitO_LoigEcQYbYdqPG7F0HUmqdN@eOb2267psgVjG3BDT8W51oEHt3U6IdrGQmbeEzb11gU6WGV3zhdX0a83VbimDN1JsB7GQsvbN75@XB@g4wzy0Wn1osiQKy8EJFJXUjPq@dYewUsDa2FrC8dHbj2MrHhKu5Z6xePaXwBWBGyYZw10tca1zBT_ta85a7AJptQ9BSCAbGN2JS@quX0qH9YzxTISmWwQel8FUlMBhNW0vGAkZhVEEsXyBzrVcDMBU4KHe5MzsuEpStjNwCWOgt93@NALGZW3Nc6uCz1Uc7CJ4PpnV1dbfrVxMXdShVWqMrqKG0ZW_Ho3DMdny6iU7LztlBVQubfNhuLtYSXXXW_CqXQpLKOd@4tesPjybSx2ObRyr6hgb@njqZAiQg7zWk2RjPn@7YxTgZs68oY6UVYYec_ZtiANynwuQedk4upM5JzB_2S1ufpIjXJAvjV4@4yxDE4FmqA_nuAjKoaX2FgVp9hP1Ysh_okbIf6TkqsrwGfu7mEwEINIAUh92a0vXfqSyOMXUCt_S8iOl3pvy9U2RoRkaCGBKsyxDmShETfx_9h8=&header=1&autoplay=1&width=348&height=200';
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.envivo);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ImportantesComponent.prototype, "urlSafe", void 0);
    ImportantesComponent = __decorate([
        core_1.Component({
            selector: 'app-importantes',
            templateUrl: './importantes.component.html',
            styleUrls: ['./importantes.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            partidos_service_1.PartidosService,
            generales_service_1.GeneralesService,
            caballos_service_1.CaballosService,
            inicio_sesion_service_1.InicioSesionService,
            platform_browser_1.DomSanitizer])
    ], ImportantesComponent);
    return ImportantesComponent;
}());
exports.ImportantesComponent = ImportantesComponent;
//# sourceMappingURL=importantes.component.js.map