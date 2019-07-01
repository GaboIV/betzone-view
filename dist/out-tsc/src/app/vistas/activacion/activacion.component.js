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
var usuario_service_1 = require("../../servicios/usuario.service");
var inicio_sesion_service_1 = require("../../servicios/inicio-sesion.service");
var ActivacionComponent = /** @class */ (function () {
    function ActivacionComponent(route, _usuarioService, _sesionUsuario) {
        this.route = route;
        this._usuarioService = _usuarioService;
        this._sesionUsuario = _sesionUsuario;
        this.activado = false;
        this.mensaje = '';
    }
    ActivacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            console.log(params['cod_act']);
            _this.cod = params['cod_act'];
        });
        this._usuarioService.activarUsuario(this.cod)
            .subscribe(function (res) {
            if (res.status === 'correcto') {
                _this.activado = true;
                _this._sesionUsuario.estatus = 'Sesion';
                console.log(res.usuario[0]);
                _this._sesionUsuario.usuario = res.usuario[0];
                _this._sesionUsuario.guardarUsuario(res.usuario[0].id_usuario, res.usuario[0].numerico, res.usuario[0].usuario);
            }
            else {
                _this.mensaje = res.mensaje;
            }
        });
    };
    ActivacionComponent = __decorate([
        core_1.Component({
            selector: 'app-activacion',
            templateUrl: './activacion.component.html',
            styleUrls: ['./activacion.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            usuario_service_1.UsuarioService,
            inicio_sesion_service_1.InicioSesionService])
    ], ActivacionComponent);
    return ActivacionComponent;
}());
exports.ActivacionComponent = ActivacionComponent;
//# sourceMappingURL=activacion.component.js.map