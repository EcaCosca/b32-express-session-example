const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("WELCOME!")
})

app.listen(port, ()=>{console.log(`http://localhost:${port}/`)})