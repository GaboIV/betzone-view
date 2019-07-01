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
var caballos_service_1 = require("../../servicios/caballos.service");
var http_1 = require("@angular/common/http");
var inscripcion_1 = require("../../modelos/inscripcion");
var ngx_toastr_1 = require("ngx-toastr");
var NuevaInscripcionComponent = /** @class */ (function () {
    function NuevaInscripcionComponent(router, route, _caballosService, http, toastr) {
        this.router = router;
        this.route = route;
        this._caballosService = _caballosService;
        this.http = http;
        this.toastr = toastr;
        this.inscripcion = new inscripcion_1.Inscripcion('', '', '', '', '', '', '', '', '', '', '', '', this.id_carrera);
    }
    NuevaInscripcionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (parametros) {
            _this.inscripcion.id_carrera = parametros['id_carrera'];
        });
        this.cargarCaballosUI();
        this.cargarJinetesUI();
        this.cargarEntrenadoresUI();
        this.cargarStudsUI();
    };
    NuevaInscripcionComponent.prototype.enviarDatos = function () {
        var _this = this;
        this.inscripcion.id_caballo = $('#ejemplar_ipt').val();
        this.inscripcion.id_jinete = $('#jinete_ipt').val();
        this.inscripcion.id_entrenador = $('#entrenador_ipt').val();
        this.inscripcion.id_stud = $('#stud1_ipt').val();
        this.inscripcion.id_stud2 = $('#stud2_ipt').val();
        this.inscripcion.numero = $('#nro_ipt').val();
        this.inscripcion.puesto = $('#pto_ipt').val();
        console.log(this.inscripcion);
        this._caballosService.crearInscripcion(this.inscripcion)
            .subscribe(function (res) {
            if (res.status === 'correcto') {
                _this.toastr.success('Correcto', 'Inscripción guardada satisfactoriamente', {
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right'
                });
                _this.router.navigate(['/inscripciones']);
            }
            else {
            }
        });
    };
    NuevaInscripcionComponent.prototype.cargarCaballosUI = function () {
        var _this = this;
        if (localStorage.getItem('caballosui') !== null) {
            this.caballosui = JSON.parse(localStorage.getItem('caballosui'));
            $(function () {
                $('#ejemplar_ipt').autocomplete({
                    source: _this.caballosui
                });
            });
        }
        else {
            this._caballosService.cargarCaballosUI()
                .subscribe(function (caballosui) {
                $(function () {
                    $('#ejemplar_ipt').autocomplete({
                        source: caballosui
                    });
                });
            });
        }
    };
    NuevaInscripcionComponent.prototype.cargarJinetesUI = function () {
        var _this = this;
        if (localStorage.getItem('jinetesui') !== null) {
            this.jinetesui = JSON.parse(localStorage.getItem('jinetesui'));
            $(function () {
                $('#jinete_ipt').autocomplete({
                    source: _this.jinetesui
                });
            });
        }
        else {
            this._caballosService.cargarJinetesUI()
                .subscribe(function (jinetesui) {
                $(function () {
                    $('#jinete_ipt').autocomplete({
                        source: jinetesui
                    });
                });
            });
        }
    };
    NuevaInscripcionComponent.prototype.cargarEntrenadoresUI = function () {
        var _this = this;
        if (localStorage.getItem('entrenadoresui') !== null) {
            this.entrenadoresui = JSON.parse(localStorage.getItem('entrenadoresui'));
            $(function () {
                $('#entrenador_ipt').autocomplete({
                    source: _this.entrenadoresui
                });
            });
        }
        else {
            this._caballosService.cargarEntrenadoresUI()
                .subscribe(function (entrenadoresui) {
                $(function () {
                    $('#entrenador_ipt').autocomplete({
                        source: entrenadoresui
                    });
                });
            });
        }
    };
    NuevaInscripcionComponent.prototype.cargarStudsUI = function () {
        var _this = this;
        if (localStorage.getItem('studsui') !== null) {
            this.studsui = JSON.parse(localStorage.getItem('studsui'));
            $(function () {
                $('#stud1_ipt').autocomplete({
                    source: _this.studsui
                });
                $('#stud2_ipt').autocomplete({
                    source: _this.studsui
                });
            });
        }
        else {
            this._caballosService.cargarStudsUI()
                .subscribe(function (studsui) {
                $(function () {
                    $('#stud1_ipt').autocomplete({
                        source: studsui
                    });
                    $('#stud2_ipt').autocomplete({
                        source: studsui
                    });
                });
            });
        }
    };
    NuevaInscripcionComponent = __decorate([
        core_1.Component({
            selector: 'app-nueva-inscripcion',
            templateUrl: './nueva-inscripcion.component.html',
            styleUrls: ['./nueva-inscripcion.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            caballos_service_1.CaballosService,
            http_1.HttpClient,
            ngx_toastr_1.ToastrService])
    ], NuevaInscripcionComponent);
    return NuevaInscripcionComponent;
}());
exports.NuevaInscripcionComponent = NuevaInscripcionComponent;
//# sourceMappingURL=nueva-inscripcion.component.js.map