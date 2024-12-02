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
   const miCliente= new Cliente("Pepe",43010282,2615911890)
   console.log(miCliente.nombre =="Pepe")
   console.log(miCliente.dni ==43010282)
   console.log(miCliente.telefono == 2615911890)


}

testCliente()