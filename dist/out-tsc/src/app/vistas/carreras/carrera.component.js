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
var caballos_service_1 = require("src/app/servicios/caballos.service");
var ngx_toastr_1 = require("ngx-toastr");
var CarreraComponent = /** @class */ (function () {
    function CarreraComponent(router, route, _caballoService, toastr) {
        this.router = router;
        this.route = route;
        this._caballoService = _caballoService;
        this.toastr = toastr;
        this.carrera = [];
        this.studs = [];
        this.studis = [];
        this.enviando = false;
        this.zona = 'inscripciones';
        this.agregarIns = 0;
        this.param = '';
        this.caballos = [];
        this.caballios = [];
        this.jinetes = [];
        this.jineset = [];
        this.entrenadores = [];
        this.enternadors = [];
    }
    CarreraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (parametros) {
            var param = parametros.id_carrera;
            _this.param = param;
            _this._caballoService.cargarCarreras(param)
                .subscribe(function (resp) {
                _this.carrera = resp.carreras;
            });
        });
        this.route.queryParams
            .subscribe(function (params) {
            _this.zona = params.zona;
        });
        if (localStorage.getItem('studs') !== null) {
            this.studs = JSON.parse(localStorage.getItem('studs'));
        }
        else {
            this._caballoService.cargarStuds()
                .subscribe(function (resp) {
                if (resp.status === 'correcto') {
                    _this.studs = resp.studs;
                    $('#spinact').removeClass('fa-spin');
                    localStorage.setItem('studs', JSON.stringify(resp.studs));
                    localStorage.setItem('act_studs', JSON.stringify(resp.actualizacion));
                    _this._caballoService.act_studs = resp.actualizacion;
                }
            });
        }
        if (localStorage.getItem('caballos') !== null) {
            this.caballos = JSON.parse(localStorage.getItem('caballos'));
        }
        else {
            this._caballoService.cargarCaballos()
                .subscribe(function (resp) {
                if (resp.status === 'correcto') {
                    _this.caballos = resp.caballos;
                    localStorage.setItem('caballos', JSON.stringify(resp.caballos));
                    localStorage.setItem('act_caballos', JSON.stringify(resp.actualizacion));
                    _this._caballoService.act_caballos = resp.actualizacion;
                }
            });
        }
        if (localStorage.getItem('jinetes') !== null) {
            this.jinetes = JSON.parse(localStorage.getItem('jinetes'));
        }
        else {
            this._caballoService.cargarJinetes()
                .subscribe(function (resp) {
                if (resp.status === 'correcto') {
                    _this.jinetes = resp.jinetes;
                    localStorage.setItem('jinetes', JSON.stringify(resp.jinetes));
                    localStorage.setItem('act_jinetes', JSON.stringify(resp.actualizacion));
                    _this._caballoService.act_jinetes = resp.actualizacion;
                }
            });
        }
        if (localStorage.getItem('entrenadores') !== null) {
            this.entrenadores = JSON.parse(localStorage.getItem('entrenadores'));
        }
        else {
            this._caballoService.cargarEntrenadores()
                .subscribe(function (resp) {
                if (resp.status === 'correcto') {
                    _this.entrenadores = resp.entrenadores;
                    localStorage.setItem('entrenadores', JSON.stringify(resp.entrenadores));
                    localStorage.setItem('act_entrenadores', JSON.stringify(resp.actualizacion));
                    _this._caballoService.act_entrenadores = resp.actualizacion;
                }
            });
        }
    };
    CarreraComponent.prototype.buscarCaballos = function (descripcion, id_ins) {
        $('.bjin').slideUp('500');
        $('.bent').slideUp('500');
        this.caballios = [];
        if (descripcion !== '') {
            var busqueda_1 = new RegExp(descripcion, 'i');
            var caballios = this.caballos.filter(function (caballos) { return busqueda_1.test(caballos.nombre); });
            this.caballios = caballios;
        }
        $('#bcab-' + id_ins).slideDown(500);
    };
    CarreraComponent.prototype.buscarJinetes = function (descripcion, id_ins, index) {
        $('.bcab').slideUp('500');
        $('.bent').slideUp('500');
        this.jineset = [];
        if (descripcion !== '') {
            var busqueda_2 = new RegExp(descripcion, 'i');
            var jineset = this.jinetes.filter(function (jinetes) { return busqueda_2.test(jinetes.nombre); });
            this.jineset = jineset;
        }
        else {
            this.carrera[0].inscritos[index].id_jinete = [];
        }
        $('#bjin-' + id_ins).slideDown(500);
    };
    CarreraComponent.prototype.buscarEntrenadores = function (descripcion, id_ins, index) {
        $('.bjin').slideUp('500');
        $('.becab').slideUp('500');
        this.enternadors = [];
        if (descripcion !== '') {
            var busqueda_3 = new RegExp(descripcion, 'i');
            var enternadors = this.entrenadores.filter(function (entrenadores) { return busqueda_3.test(entrenadores.nombre); });
            this.enternadors = enternadors;
        }
        else {
            this.carrera[0].inscritos[index].id_entrenador = [];
        }
        $('#bent-' + id_ins).slideDown(500);
    };
    CarreraComponent.prototype.buscarStud = function (descripcion, id_ins, nro, index) {
        $('.bjin').slideUp('500');
        $('.becab').slideUp('500');
        $('.bent').slideUp('500');
        this.studis = [];
        if (descripcion !== '') {
            var busqueda_4 = new RegExp(descripcion, 'i');
            var studis = this.studs.filter(function (studs) { return busqueda_4.test(studs.descripcion); });
            this.studis = studis;
        }
        else {
            if (nro === 1) {
                this.carrera[0].inscritos[index].id_stud = [];
            }
            if (nro === 2) {
                this.carrera[0].inscritos[index].id_stud2 = [];
            }
        }
        $('#bus-' + nro + '-' + id_ins).slideDown(500);
    };
    CarreraComponent.prototype.ocultaBus = function (el, id_ins) {
        $('#' + el + '-' + id_ins).slideUp(500);
    };
    CarreraComponent.prototype.guardarInfo = function () {
        console.log(this.carrera);
        this._caballoService.enviarCarrera(this.carrera[0])
            .subscribe(function (resp) {
            console.log(resp);
        });
    };
    CarreraComponent.prototype.selStud = function (index, nro, stud, id_ins) {
        if (nro === 1) {
            this.carrera[0].inscritos[index].id_stud = stud;
            $('#bus-1-' + id_ins).hide(100);
            $('#st1-' + id_ins).val(stud.descripcion);
        }
        if (nro === 2) {
            this.carrera[0].inscritos[index].id_stud2 = stud;
            $('#bus-2-' + id_ins).hide(100);
            $('#st2-' + id_ins).val(stud.descripcion);
        }
    };
    CarreraComponent.prototype.selCab = function (index, cab, id_ins) {
        this.carrera[0].inscritos[index].id_caballo = cab;
        $('#bcab-' + id_ins).slideUp(500);
        $('#cb-' + id_ins).val(cab.nombre);
    };
    CarreraComponent.prototype.selJin = function (index, jin, id_ins) {
        this.carrera[0].inscritos[index].id_jinete = jin;
        $('#bjin-' + id_ins).hide(100);
        $('#jt-' + id_ins).val(jin.nombre);
    };
    CarreraComponent.prototype.selEnt = function (index, ent, id_ins) {
        this.carrera[0].inscritos[index].id_entrenador = ent;
        $('#bent-' + id_ins).hide(100);
        $('#et-' + id_ins).val(ent.nombre);
    };
    CarreraComponent.prototype.agregarEjemps = function (agregarIns, id_carrera) {
        var _this = this;
        this._caballoService.agregarIns(agregarIns, id_carrera)
            .subscribe(function (resp) {
            if (resp.mensaje === 'correcto') {
                _this._caballoService.cargarCarreras(_this.param)
                    .subscribe(function (resp) {
                    _this.carrera = resp.carreras;
                    _this.toastr.success('Correcto', 'Se agregaron ' + resp.inscritos + ' ejemplares a la carrera', {
                        timeOut: 3000,
                        positionClass: 'toast-bottom-right'
                    });
                    var navigationExtras = {
                        queryParams: { 'zona': 'inscripciones' }
                    };
                    _this.router.navigate(['/carrera/' + id_carrera], navigationExtras);
                });
            }
        });
    };
    CarreraComponent.prototype.muestraMens1 = function (id) {
        var muestra = 0;
        $('.mens2_e_i').fadeOut(500);
        if ($('#dl1_' + id).is(':visible') === false) {
            muestra = 1;
        }
        $('.mens_e_i').fadeOut(500);
        if (muestra === 1) {
            $('#dl1_' + id).fadeIn(500);
        }
    };
    CarreraComponent.prototype.muestraMens2 = function (id) {
        $('.mens2_e_i').fadeOut(500);
        $('#dl2_' + id).fadeToggle(500);
    };
    CarreraComponent.prototype.muestraMens3 = function (id) {
        $('.mens2_e_i').fadeOut(500);
        $('#dl3_' + id).fadeToggle(500);
    };
    CarreraComponent.prototype.retirar = function (ins, id_inscripcion) {
        var _this = this;
        this._caballoService.retirarIns(id_inscripcion)
            .subscribe(function (resp) {
            $('.mens2_e_i').fadeOut(500);
            $('.mens_e_i').fadeOut(500);
            if (resp.status === 'correcto') {
                ins.status = '2';
                _this.toastr.success('Correcto', resp.mensaje, {
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    };
    CarreraComponent.prototype.eliminar = function (ins, id_inscripcion) {
        var _this = this;
        this._caballoService.eliminarIns(id_inscripcion)
            .subscribe(function (resp) {
            $('.mens2_e_i').fadeOut(500);
            $('.mens_e_i').fadeOut(500);
            ins.status = '99';
            if (resp.status === 'correcto') {
                _this.toastr.success('Correcto', resp.mensaje, {
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    };
    CarreraComponent = __decorate([
        core_1.Component({
            selector: 'app-carrera',
            templateUrl: './carrera.component.html',
            styleUrls: ['./carrera.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            caballos_service_1.CaballosService,
            ngx_toastr_1.ToastrService])
    ], CarreraComponent);
    return CarreraComponent;
}());
exports.CarreraComponent = CarreraComponent;
//# sourceMappingURL=carrera.component.js.map