const fs = require('fs')

<<<<<<< HEAD

=======
>>>>>>> 40ca6f2a5eb189328f7a34282cd241e11d6f36dd
function nuevoTurno(data){
    console.log("--Modelo--")
    let str_turnos = fs.readFileSync('./db/turnos.txt','utf-8')
    let turnos = []
    if(str_turnos){
        turnos = JSON.parse(str_turnos)
    }

    turnos.push(data)

    fs.writeFileSync('./db/turnos.txt',JSON.stringify(turnos))
}

<<<<<<< HEAD
function nuevoCliente(data){
    console.log("--Modelo--")
    let str_cliente = fs.readFileSync('./db/clientes.txt','utf-8')
    let clientes = []
    if(str_cliente){
        clientes = JSON.parse(str_cliente)
    }

    clientes.push(data)

    fs.writeFileSync('./db/clientes.txt',JSON.stringify(clientes))
}

module.exports = {nuevoTurno, nuevoCliente}
=======
module.exports = {nuevoTurno}
>>>>>>> 40ca6f2a5eb189328f7a34282cd241e11d6f36dd
