const express = require('express')
const path = require('path')
const app = express()
const Seguridad = require('./seguridad.js')

app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get ('/',(req, res)=>{
    //res.send('<h1>Hola desde servidor Node</p>')
    res.render('index.ejs',{url : "http://localhost:3000"})
})

<<<<<<< HEAD

app.post('/nuevoturno',(req, res)=>{
    console.log(req.body)
=======
app.post('/nuevoturno',(req, res)=>{
    console.log(req.body)

>>>>>>> 40ca6f2a5eb189328f7a34282cd241e11d6f36dd
    Seguridad.nuevoTurno(req.body)

    res.send(JSON.stringify(req.body))
})

<<<<<<< HEAD

app.get ('/cliente',(req, res)=>{
    //res.send('<h1>Hola desde servidor Node</p>')
    res.render('Cliente.ejs',{url : "http://localhost:3000"})
})


app.post('/nuevocliente',(req, res)=>{
    console.log(req.body)

    Seguridad.nuevoCliente(req.body)

    res.send(JSON.stringify(req.body))
})


=======
>>>>>>> 40ca6f2a5eb189328f7a34282cd241e11d6f36dd
const PORT = 3000
app.listen(PORT, ()=>{console.log(`Escuchando en el puerto  ${PORT} `)})