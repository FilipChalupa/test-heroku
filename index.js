const express = require('express');
const exphbs = require('express-handlebars');


const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


const port = parseInt(process.env.PORT || '', 10) || 8080;

const visitCounter = {
  home: 0,
  contacts: 0,
};

// app.get('/', (req, res) => res.send(`Toto je ${++visitCounter}. návštěva.`));

app.get('/', (req, res) => {
  visitCounter.home += 1;
  res.render('home', {
    visitCounter,
  });
});

app.get('/contacts', (req, res) => {
  visitCounter.contacts += 1;
  res.render('contacts');
});

app.listen(port);
