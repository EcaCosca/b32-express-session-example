const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

const sess = {
    secret: "123test",
    resave: false,
    saveUnitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 360000000000,
    }
}

app.use(session(sess))

app.get('/', (req, res) => {
    console.log(req.session)
    res.send("WELCOME!")
})

app.get('/login', (req, res) => {
    req.session.user = { name: "Valentina"}
    console.log(req.session.user)
    res.send('You are logged in')
})

app.get('/secret', (req, res)=>{
    return req.session.user ? res.send(`Welcome into the secret area`) : res.send("you are not in my list, you are not cool, bounce")
})

app.get('/logout', (req, res)=>{
    req.session.destroy((err)=>{
        if(err){res.send("it didn't work")}
        res.send("You are logged out")
    })
})

app.listen(port, ()=>{console.log(`http://localhost:${port}/`)})