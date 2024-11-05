const express = require('express')


const app = express()

app.get ('/',(req, res)=>{
    res.send('<h1>Hola desde servidor Node</p>')
})


const PORT = 3000
app.listen(PORT, ()=>{console.log(`Escuchando en el puerto  ${PORT} `)})