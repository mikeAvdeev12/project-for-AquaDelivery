const express = require('express');
const exphbs = require('express-handlebars');
const path = require("path");
let cookieParser = require('cookie-parser');
let session = require('express-session')
let FileStore = require('session-file-store')(session)
const indexRouts = require('./routes/index');
const companydetailsRouts = require('./routes/companydetails');
const registerRouts = require('./routes/register');
const contractRouts = require('./routes/contract');
const plansRouts = require('./routes/plans');
const invoiceRouts = require('./routes/invoice');
const logoutRouts = require('./routes/logout');
const countDownRouts = require('./routes/countdown')

const app = express();

const hbs = exphbs.create( {
	defaultLayout: 'layout',
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
let filestore = {};
app.use(session({
    store: new FileStore(filestore),
    key: "user_sid",
    secret:'work hard',
    resave: true,
    saveUninitialized: false,
    cookie: {
        expires: 600000,
    }
  }));
app.use('/', indexRouts);
app.use('/registration', registerRouts);
app.use('/companydetails', companydetailsRouts);
app.use('/contract', contractRouts);
app.use('/plans', plansRouts);
app.use('/invoice', invoiceRouts);
app.use('/logout', logoutRouts);
app.use('/countdown', countDownRouts);

module.exports = app;
