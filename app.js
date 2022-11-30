const express = require('express');
var hbs = require('hbs');

require('dotenv').config();

const app = express()
const port = process.env.PORT;

///handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });



app.use(express.static('public'));



app.get('/', function (req, res) {
    res.render('home', {
        titulo: 'paso de variables con handlebars',
        nombre: 'yo'
    });

});

app.get('/generic', function (req, res) {
    res.render('generic', {
        titulo: 'vista de generic',
        nombre: 'generic'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        titulo: 'vista elements',
        nombre: 'elements'
    });
});

app.get('*', function (req, res) {
    res.send('Pagina no encontrada');
});

app.listen(port, () => {
    console.log(`Ejemplo de par ver el por: ${port}`)
});