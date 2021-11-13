// ************ Require's ************
const express = require('express');
const path = require('path');
const mainRutas = require('./src/routes/main');

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static('public'));

// para poder parsear el contenido que venga desde los formularios y poder guardarlo en un body para despues poder usarlo y guardarlo en un json
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

// le estamos diciendo a app que vamos a utilizar la ruta / y le vamos a pasar las demas rutas que estan guardadas en la variable mainRutas
app.use('/', mainRutas);

// para que mi servidor sepa que tiene que usar este motor de pantillas que esta previamente instalado
app.set('views',path.join(__dirname,'./src/views'));
app.set('view engine', 'ejs');

app.listen(3000, ()=>{
    console.log("SERVIDOR FUNCIONANDO EN EL PUERTO 3000");

});

// ************ exports app - dont'touch ************
module.exports = app;