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
var inicio_sesion_service_1 = require("../../servicios/inicio-sesion.service");
var generales_service_1 = require("../../servicios/generales.service");
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
var ChangelogComponent = /** @class */ (function () {
    function ChangelogComponent(router, route, _inicioSesion, _generalesService, toastr) {
        this.router = router;
        this.route = route;
        this._inicioSesion = _inicioSesion;
        this._generalesService = _generalesService;
        this.toastr = toastr;
        this.zona = 'changelogs';
        this.nuevaTarea = '';
        this.nuevoEstatus = '';
    }
    ChangelogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._generalesService.cargarChangelog('todos')
            .subscribe(function (resp) {
            _this.changelogs = resp.changelog;
        });
        this.route.queryParams
            .subscribe(function (params) {
            _this.zona = params.zona;
        });
        if (this.zona === undefined) {
            this.router.navigate(['/changelog'], { queryParams: { zona: 'tareas' } });
            this.zona = 'tareas';
        }
    };
    ChangelogComponent.prototype.enviarTarea = function () {
        var _this = this;
        this._generalesService.agregarTarea(this.nuevaTarea, this._inicioSesion.usuario.id_usuario)
            .subscribe(function (resp) {
            if (resp.status === 'correcto') {
                _this.changelogs = resp.changelogs;
                _this.toastr.success('Correcto', 'Se agregó la tarea:  ' + _this.nuevaTarea, {
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right'
                });
                var navigationExtras = {
                    queryParams: { 'zona': 'tareas' }
                };
                _this.router.navigate(['/changelog'], navigationExtras);
                _this.toastr.info('<div><input></div>');
            }
        });
    };
    ChangelogComponent.prototype.verEstatus = function (estatus) {
        if (this.nuevoEstatus === estatus) {
            this.nuevoEstatus = '0';
        }
        else {
            this.nuevoEstatus = estatus;
        }
    };
    ChangelogComponent.prototype.cambiarEstatus = function (cl) {
        var _this = this;
        var id_cl = cl.id_reto;
        this._generalesService.actualizarEstatusTarea(id_cl)
            .subscribe(function (resp) {
            if (resp.status === 'correcto') {
                cl.estatus = '1';
                _this.nuevoEstatus = '0';
            }
        });
    };
    ChangelogComponent = __decorate([
        core_1.Component({
            selector: 'app-changelog',
            templateUrl: './changelog.component.html',
            styleUrls: ['../opciones/historial/historial.component.css', './changelog.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            inicio_sesion_service_1.InicioSesionService,
            generales_service_1.GeneralesService,
            ngx_toastr_1.ToastrService])
    ], ChangelogComponent);
    return ChangelogComponent;
}());
exports.ChangelogComponent = ChangelogComponent;
//# sourceMappingURL=changelog.component.js.map