const { Turno } = require('./clases.js')

function testTurno(){
    const miTurno = new Turno("lunes",2,true)
    console.log(miTurno.dia == 'lunes')
    console.log(miTurno.hora == 2)
    console.log(miTurno.libre == true)

}

testTurno()


const { Cliente } = require('./clases.js')

function testCliente(){
   const miCliente= new Cliente("Iván",42669466,2612629617)
   console.log(miCliente.nombre =="Iván")
   console.log(miCliente.dni ==42669466)
   console.log(miCliente.telefono == 2612629617)


}

testCliente()