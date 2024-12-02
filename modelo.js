const { json } = require('express')
const fs = require('fs')

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

function nuevoCliente(datos){
    console.log("--Modelo--");
    let str_cliente = fs.readFileSync('./db/clientes.txt', 'utf-8')
    let clientes = []
    if(str_cliente){
        clientes = JSON.parse(str_cliente)
    }
    clientes.push(datos)
    fs.writeFileSync('./db/clientes.txt',JSON.stringify(clientes))
}

module.exports = {nuevoTurno, nuevoCliente}