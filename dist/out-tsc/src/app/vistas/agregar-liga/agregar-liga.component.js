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
var deportes_service_1 = require("../../servicios/deportes.service");
var servicios_indice_1 = require("../../servicios/servicios.indice");
var generales_service_1 = require("../../servicios/generales.service");
var http_1 = require("@angular/common/http");
var ligas_1 = require("../../modelos/ligas");
var ligas_service_1 = require("../../servicios/ligas.service");
var ngx_toastr_1 = require("ngx-toastr");
var AgregarLigaComponent = /** @class */ (function () {
    function AgregarLigaComponent(router, activatedRoute, _deporteService, _nacionalidadesService, _generalesService, _ligasService, http, toastr) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._deporteService = _deporteService;
        this._nacionalidadesService = _nacionalidadesService;
        this._generalesService = _generalesService;
        this._ligasService = _ligasService;
        this.http = http;
        this.toastr = toastr;
        this.liga = new ligas_1.Liga('', '', '', '', 0, 0, '', '', '', '', 0, '');
        this.mostrarEdit = false;
        this.pagina = 1;
        this.desactivar = 'disabled';
    }
    AgregarLigaComponent.prototype.ngOnInit = function () {
        this.cargarNacionalidades();
        this.cargarDeportes();
    };
    AgregarLigaComponent.prototype.cargarNacionalidades = function () {
        var _this = this;
        this._nacionalidadesService.cargarNacionalidades()
            .subscribe(function (nacionalidades) { return _this.nacionalidades = nacionalidades; });
    };
    AgregarLigaComponent.prototype.cargarDeportes = function () {
        var _this = this;
        this._deporteService.cargarDeportes()
            .subscribe(function (deportes) { return _this.deportes = deportes; });
    };
    AgregarLigaComponent.prototype.enviarDatos = function (liga) {
        var _this = this;
        this._ligasService.crearLiga(liga)
            .subscribe(function (res) {
            if (res.status === 'correcto') {
                _this.toastr.success('Correcto', 'Liga guardada satisfactoriamente', {
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right'
                });
                _this.router.navigate(['/ligas']);
            }
        });
    };
    AgregarLigaComponent = __decorate([
        core_1.Component({
            selector: 'app-agregar-liga',
            templateUrl: './agregar-liga.component.html',
            styleUrls: ['./agregar-liga.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            deportes_service_1.DeportesService,
            servicios_indice_1.NacionalidadesService,
            generales_service_1.GeneralesService,
            ligas_service_1.LigasService,
            http_1.HttpClient,
            ngx_toastr_1.ToastrService])
    ], AgregarLigaComponent);
    return AgregarLigaComponent;
}());
exports.AgregarLigaComponent = AgregarLigaComponent;
//# sourceMappingURL=agregar-liga.component.js.map