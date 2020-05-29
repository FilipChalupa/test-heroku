const express = require('express');
const exphbs = require('express-handlebars');


const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


const port = parseInt(process.env.PORT || '', 10) || 8080;

let visitCounter = 0;

// app.get('/', (req, res) => res.send(`Toto je ${++visitCounter}. návštěva.`));

app.get('/', (req, res) => {
  res.render('home', {
    visitCounter: ++visitCounter,
  });
});

app.get('/contacts', (req, res) => {
  res.render('contacts');
});

app.listen(port);
