"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pago = /** @class */ (function () {
    function Pago(monto, cedula, fecha_realizada, referencia, registro, estatus, id_usuario, banco_id, cuenta_id, id_pago) {
        this.monto = monto;
        this.cedula = cedula;
        this.fecha_realizada = fecha_realizada;
        this.referencia = referencia;
        this.registro = registro;
        this.estatus = estatus;
        this.id_usuario = id_usuario;
        this.banco_id = banco_id;
        this.cuenta_id = cuenta_id;
        this.id_pago = id_pago;
    }
    return Pago;
}());
exports.Pago = Pago;
//# sourceMappingURL=pago.modelo.js.map