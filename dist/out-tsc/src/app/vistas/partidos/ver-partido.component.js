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
var partidos_service_1 = require("src/app/servicios/partidos.service");
var VerPartidoComponent = /** @class */ (function () {
    function VerPartidoComponent(router, route, _partidosService) {
        this.router = router;
        this.route = route;
        this._partidosService = _partidosService;
        this.partido = [];
        this.param = '';
        this.esperando = false;
    }
    VerPartidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (parametros) {
            var param = parametros.id_partido;
            _this.param = param;
            _this._partidosService.cargarPartidos(1, param)
                .subscribe(function (partidos) {
                _this.partido = partidos;
            });
        });
        this.scroll_cuot();
    };
    VerPartidoComponent.prototype.scroll_cuot = function () {
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
    VerPartidoComponent = __decorate([
        core_1.Component({
            selector: 'app-ver-partido',
            templateUrl: './ver-partido.component.html',
            styleUrls: ['./ver-partido.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            partidos_service_1.PartidosService])
    ], VerPartidoComponent);
    return VerPartidoComponent;
}());
exports.VerPartidoComponent = VerPartidoComponent;
//# sourceMappingURL=ver-partido.component.js.map