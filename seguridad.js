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

function nuevoCliente(body){
    console.log(body)

    
        Controlador.nuevoCliente(body)
    }





module.exports = {nuevoTurno, nuevoCliente}
