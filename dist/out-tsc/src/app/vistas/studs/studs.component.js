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
var generales_service_1 = require("../../servicios/generales.service");
var ngx_toastr_1 = require("ngx-toastr");
var StudsComponent = /** @class */ (function () {
    function StudsComponent(router, activatedRoute, _caballoService, _generalesService, toastr) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._caballoService = _caballoService;
        this._generalesService = _generalesService;
        this.toastr = toastr;
        this.studs = [];
        this.studis = [];
    }
    StudsComponent.prototype.ngOnInit = function () {
        this.studsStorage();
    };
    StudsComponent.prototype.studsStorage = function () {
        if (localStorage.getItem('studs') !== null) {
            this.studs = JSON.parse(localStorage.getItem('studs'));
        }
        else {
            console.log('No hay studs');
        }
    };
    StudsComponent.prototype.cargarStuds = function () {
        var _this = this;
        $('#spinact').addClass(' fa-spin ');
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
    };
    StudsComponent.prototype.buscarStud = function (descripcion) {
        this.studis = [];
        if (descripcion !== '') {
            var busqueda_1 = new RegExp(descripcion, 'i');
            var studis = this.studs.filter(function (studs) { return busqueda_1.test(studs.descripcion); });
            this.studis = studis;
        }
    };
    StudsComponent.prototype.subirImagen = function (event, stud) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        this._generalesService.subirImagen(stud.id_stud, this.selectedFile, 'studs')
            .subscribe(function (res) {
            _this.resultado = res;
            console.log(_this.resultado);
            stud.img = _this.resultado.imagen;
        });
    };
    StudsComponent.prototype.actualizarStud = function (stud) {
        var _this = this;
        this._caballoService.actualizarStud(stud)
            .subscribe(function (resp) {
            if (resp.status === 'correcto') {
                var foundIndex = _this.studs.findIndex(function (x) { return x.id_stud === stud.id_stud; });
                console.log(foundIndex);
                _this.studs[foundIndex] = stud;
                localStorage.setItem('studs', JSON.stringify(_this.studs));
                _this.toastr.success('Correcto', resp.mensaje, {
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    };
    StudsComponent = __decorate([
        core_1.Component({
            selector: 'app-studs',
            templateUrl: './studs.component.html',
            styleUrls: ['./studs.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            caballos_service_1.CaballosService,
            generales_service_1.GeneralesService,
            ngx_toastr_1.ToastrService])
    ], StudsComponent);
    return StudsComponent;
}());
exports.StudsComponent = StudsComponent;
//# sourceMappingURL=studs.component.js.map