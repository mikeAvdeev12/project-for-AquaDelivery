const express = require('express');
const exphbs = require('express-handlebars')
const path = require("path");
const indexRouts = require('./routes/index')
const parserRouts = require('./routes/parser')
const registerRouts = require('./routes/register');

const app = express();

const hbs = exphbs.create( {
	defaultLayout: 'layout',
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
});

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use('/', indexRouts)
app.use('/parser', parserRouts)
app.use('/register', registerRouts)

module.exports = app;