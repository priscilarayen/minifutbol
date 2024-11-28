const Clases = require('./clases.js')
const Modelo = require('./modelo.js')

function nuevoTurno(data){
    console.log("--Controlador--")

    //data.libre=='on'?true:false;
    const unTurno = new Clases.Turno(data.dia, data.turno, data.libre)
    console.log(unTurno)
    Modelo.nuevoTurno(unTurno)
    
}

function nuevoCliente(data) {
    console.log("--Controlador--")

    const unCliente = new Clases.Cliente(data.nombre,data.dni,data.telefono)
    console.log(unCliente)
    Modelo.nuevoCliente(unCliente)
}

module.exports = {nuevoTurno, nuevoCliente}