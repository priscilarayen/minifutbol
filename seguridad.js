const Controlador = require('./controlador.js')

function nuevoTurno(data){
    console.log("--seguridad--")
    console.log(data)
    if(data.libre == undefined){
        data.libre = false
    }else{
        data.libre = true
    }
    console.log(data)

    if(data.token == "lkjrt4v3wmtiqoprmmor98"){
        Controlador.nuevoTurno(data)
    }
}

<<<<<<< HEAD

function nuevoCliente(data){
    console.log("--seguridad--")
    console.log(data)

    if (data.token == "123asdasdasqqq") {
        Controlador.nuevoCliente(data)
    }
}

module.exports = {nuevoTurno, nuevoCliente}
=======
module.exports = {nuevoTurno}
>>>>>>> 40ca6f2a5eb189328f7a34282cd241e11d6f36dd
