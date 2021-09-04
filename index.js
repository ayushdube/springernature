const { request } = require('express');
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

app.use(express.urlencoded({
    extended: true
  }));

app.set("view engine", "jade");
app.use(express.json());    

app.get('/', (req, res) => {
    res.render('form')
});

app.post('/signup', (req,res) => {
    console.log(req.body)

    if(req.body.newsletter && req.body.newsletter === 'on'){
        res.send(`Hello  ${req.body.firstname} ${req.body.lastname}, Thank you for signing up. Your account is now
        created. You would be receiving our periodic newsletters to your email: ${req.body.email}`)
    } else {
        res.send(`Hello ${req.body.firstname} ${req.body.lastname}, Thank you for signing up. Your account
        is now created`)
    }
});

app.listen(5000, () => {
    console.log("Server has started");
    console.log("Running in :"  + process.env.NODE_ENV); 
});