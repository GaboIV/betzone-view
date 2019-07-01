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
var sweetalert2_1 = require("sweetalert2");
var PartidoComponent = /** @class */ (function () {
    function PartidoComponent(router, route, _partidosService) {
        this.router = router;
        this.route = route;
        this._partidosService = _partidosService;
        this.era1 = '';
        this.era2 = '';
        this.id_part1 = '';
        this.id_part2 = '';
        this.id_equipo1 = '';
        this.id_equipo2 = '';
        this.enviando = false;
    }
    PartidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (parametros) {
            var param = '!' + parametros.id_partido;
            _this._partidosService.cargarPartidos(1, param)
                .subscribe(function (partidos) {
                _this.partido = partidos;
                _this.id_part1 = partidos[0].equipos[0].id_participante;
                _this.id_part2 = partidos[0].equipos[1].id_participante;
                _this.id_equipo1 = partidos[0].equipos[0].id_equipo;
                _this.id_equipo2 = partidos[0].equipos[1].id_equipo;
                if (partidos[0].equipos[0].pitchers !== 'undefined') {
                    $(function () {
                        $('#p1').autocomplete({
                            source: partidos[0].equipos[0].pitchers
                        });
                    });
                }
                if (partidos[0].equipos[1].pitchers !== 'undefined') {
                    $(function () {
                        $('#p2').autocomplete({
                            source: partidos[0].equipos[1].pitchers
                        });
                    });
                }
            });
        });
    };
    PartidoComponent.prototype.guardarInfo = function () {
        this.pitchers = [
            { nombre: $('#p0').val(), era: $('#e0').val() },
            { nombre: $('#p1').val(), era: $('#e1').val() },
        ];
        this._partidosService.guardarDatos(this.pitchers, this.partido)
            .subscribe(function (resp) {
            if (resp.status === 'success') {
                sweetalert2_1.default('¡Partido modificado!', 'Los datos se han modificado correctamente', 'success');
            }
        });
    };
    PartidoComponent.prototype.cuotaDecimal = function (valor) {
        var datos = valor.split('/');
        var res;
        if (datos[1]) {
            res = (datos[0] / datos[1]) + 1;
        }
        else {
            res = (datos[0] * 1) + 1;
        }
        var res2 = res.toFixed(2);
        return res2;
    };
    PartidoComponent.prototype.gcd = function (a, b) {
        if (b < 0.0000001) {
            return a;
        }
        return this.gcd(b, Math.floor(a % b));
    };
    PartidoComponent.prototype.cuotaFraq = function (id_eq, aalor, i) {
        var valor = (aalor - 1).toFixed(3);
        var len = valor.toString().length - 2;
        var denominator = Math.pow(10, len);
        var numerator = parseFloat(valor) * denominator;
        var divisor = this.gcd(numerator, denominator);
        numerator /= divisor;
        denominator /= divisor;
        var fraq = Math.floor(numerator) + '/' + Math.floor(denominator);
        this.partido[0].equipos[i].dividendo = fraq;
        $(function () {
            $('#fq-' + id_eq).val(fraq);
        });
    };
    PartidoComponent = __decorate([
        core_1.Component({
            selector: 'app-partido',
            templateUrl: './partido.component.html',
            styleUrls: ['./partido.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            partidos_service_1.PartidosService])
    ], PartidoComponent);
    return PartidoComponent;
}());
exports.PartidoComponent = PartidoComponent;
//# sourceMappingURL=partido.component.js.map