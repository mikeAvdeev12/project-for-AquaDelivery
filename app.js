const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

const registerRouter = require('./routes/register');

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname,'public')));




module.exports = app;
