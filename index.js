const express = require('express');

const app = express();
const port = parseInt(process.env.PORT || '', 10) || 8080;

let visitCounter = 0;

app.get('/', (req, res) => res.send(`Toto je ${++visitCounter}. návštěva.`));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
