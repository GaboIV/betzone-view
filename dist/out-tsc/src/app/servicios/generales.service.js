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
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var link_1 = require("../comun/link");
var GeneralesService = /** @class */ (function () {
    function GeneralesService(http) {
        this.http = http;
    }
    GeneralesService.prototype.subirImagen = function (id, selectedFile, carpeta) {
        var uploadData = new FormData();
        uploadData.append('myFile', selectedFile, selectedFile.name);
        return this.http.post(link_1.URL_SUBIDA_IMG + '?id=' + id + '&c=' + carpeta, uploadData)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    GeneralesService.prototype.cargarCategoriasJuegos = function () {
        var url = link_1.URL_CATEGORIAS + '/juegos';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.juegos;
        }));
    };
    GeneralesService.prototype.recibirHora = function () {
        var _this = this;
        var url = link_1.URL_FECHA + '/hora/actual';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            _this.fecha = resp.fecha;
            return resp.fecha;
        }));
    };
    GeneralesService.prototype.query = function () {
        var _this = this;
        this.largoVentana = window.innerHeight;
        this.largoCentral = this.largoVentana;
        this.largoCentral += 'px';
        $(window).resize(function () {
            _this.largoVentana = window.innerHeight;
            _this.largoCentral = _this.largoVentana;
            _this.largoCentral += 'px';
        });
    };
    GeneralesService.prototype.cargarCuentas = function () {
        var url = link_1.URL_DEPOSITO + '/cuentas';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.cuentas;
        }));
    };
    GeneralesService.prototype.cargarBancos = function () {
        var url = link_1.URL_DEPOSITO + '/bancos';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.bancos;
        }));
    };
    GeneralesService.prototype.cargarPagos = function () {
        var url = link_1.URL_DEPOSITO + '/pagos';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp.pagos;
        }));
    };
    GeneralesService.prototype.cargarChangelog = function (dato) {
        var url = link_1.URL_CHANGELOG + '/ver/' + dato;
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp;
        }));
    };
    GeneralesService.prototype.crearPago = function (pago) {
        var url = link_1.URL_DEPOSITO + '/pagos/agregar';
        return this.http.post(url, pago)
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    GeneralesService.prototype.agregarTarea = function (tarea, id_usuario) {
        var url = link_1.URL_CHANGELOG + '/agregar';
        return this.http.post(url, { tarea: tarea, id_usuario: id_usuario })
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    GeneralesService.prototype.actualizarEstatusTarea = function (id_cl) {
        var url = link_1.URL_CHANGELOG + '/actualizar';
        return this.http.post(url, { id_cl: id_cl })
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    GeneralesService.prototype.actualizarPago = function (id_pago, estatus) {
        var url = link_1.URL_DEPOSITO + '/pago/actualizar';
        return this.http.post(url, { id_pago: id_pago, estatus: estatus })
            .pipe(operators_1.map(function (resp) {
            var res = resp;
            return res;
        }));
    };
    GeneralesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GeneralesService);
    return GeneralesService;
}());
exports.GeneralesService = GeneralesService;
//# sourceMappingURL=generales.service.js.map