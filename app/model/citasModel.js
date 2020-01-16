'use strict';

var schema = function(citas){
    this.idCliente = citas.idCliente;
    this.idDoctor = citas.idDoctor;
    this.fechaCita = citas.fechaCita;
    this.observaciones = citas.observaciones
    this.createat = new Date();
}


module.exports = schema;

