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
var carrera_1 = require("../../modelos/carrera");
var $ = require("jquery");
var ngx_toastr_1 = require("ngx-toastr");
var NuevoCarreraComponent = /** @class */ (function () {
    function NuevoCarreraComponent(router, activatedRoute, _caballoService, toastr) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._caballoService = _caballoService;
        this.toastr = toastr;
        this.carrera = new carrera_1.Carrera('', 'LR1000100', '1', '', '1000', '1', '01', '00', '', '', '');
        this.hipodromos = [];
        this.hoy = Date.now();
        this.today = new Date(this.hoy);
    }
    NuevoCarreraComponent.prototype.ngOnInit = function () {
        this.hipodromos = JSON.parse(localStorage.getItem('hipodromos'));
        this.cargarHipodromos();
        this.query();
        this.calcularFecha();
        $('#nro_gral').focus().select();
    };
    NuevoCarreraComponent.prototype.cargarHipodromos = function () {
        var _this = this;
        this._caballoService.cargarHipodromos()
            .subscribe(function (resp) {
            _this.hipodromos = resp.hipodromos;
            localStorage.setItem('hipodromos', JSON.stringify(resp.hipodromos));
        });
    };
    NuevoCarreraComponent.prototype.query = function () {
        var _this = this;
        $('.cod_hrs').keyup(function () {
            var acro = $('#hipodromo_car').val();
            var arra;
            arra = _this.hipodromos.find(function (hipodromo) { return hipodromo.id_hipodromo === acro; });
            arra = arra.acro;
            var nro_gral = $('#nro_gral').val();
            var nro_carrera = $('#nro_carrera').val();
            var nro_valida = $('#nro_valida').val();
            var codigo = arra + nro_gral + nro_carrera + nro_valida;
            $('#codigo_car').val(codigo);
            _this.carrera.codigo = codigo;
            _this.calcularFecha();
        });
        $('.hipodromo_car').change(function () {
            var acro = $('#hipodromo_car').val();
            var arra;
            arra = _this.hipodromos.find(function (hipodromo) { return hipodromo.id_hipodromo === acro; });
            arra = arra.acro;
            var nro_gral = $('#nro_gral').val();
            var nro_carrera = $('#nro_carrera').val();
            var nro_valida = $('#nro_valida').val();
            var codigo = arra + nro_gral + nro_carrera + nro_valida;
            $('#codigo_car').val(codigo);
            _this.calcularFecha();
        });
    };
    NuevoCarreraComponent.prototype.calcularFecha = function () {
        this.acronimo =
            $('#fechaAnio').val() + '-' +
                $('#fechaMes').val() + '-' +
                $('#fechaDia').val() + ' ' +
                $('#fechaHora').val() + ':' +
                $('#fechaMinuto').val() + ':00 ' +
                $('#fechaAMP').val();
        this.carrera.fecha_hora = this.acronimo;
    };
    NuevoCarreraComponent.prototype.enviarDatos = function (carrera) {
        var _this = this;
        console.log(carrera);
        this._caballoService.crearCarrera(this.carrera)
            .subscribe(function (res) {
            if (res.status === 'correcto') {
                _this.toastr.success('Correcto', 'Carrera guardada satisfactoriamente', {
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right'
                });
                _this.router.navigate(['/carreras']);
            }
            else {
            }
        });
    };
    NuevoCarreraComponent = __decorate([
        core_1.Component({
            selector: 'app-nuevo-carrera',
            templateUrl: './nuevo-carrera.component.html',
            styleUrls: ['./nuevo-carrera.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            caballos_service_1.CaballosService,
            ngx_toastr_1.ToastrService])
    ], NuevoCarreraComponent);
    return NuevoCarreraComponent;
}());
exports.NuevoCarreraComponent = NuevoCarreraComponent;
//# sourceMappingURL=nuevo-carrera.component.js.map