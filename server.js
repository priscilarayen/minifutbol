const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get ('/',(req, res)=>{
    //res.send('<h1>Hola desde servidor Node</p>')
    res.render('index.ejs',{cohorte : "2023"})
})


const PORT = 3000
app.listen(PORT, ()=>{console.log(`Escuchando en el puerto  ${PORT} `)})