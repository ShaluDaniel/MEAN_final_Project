const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const jwt = require('jsonwebtoken')
const Logindata = require('./src/models/Logindata');
const Blogdata = require('./src/models/Blogdata')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.post('/login', (req,res) => {
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    let sign = req.body
    Logindata.findOne({email: sign.userid})
    .then(function(data){
        if (data == null){
            res.status(401).send('Invalid email')
        }
        else if(data.password == sign.password){
            let payload = {subject: data.email+data.password}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
        else{
            res.status(401).send('Invalid Password')
        }
    })
})

app.listen(port,()=>{console.log("Server ready at "+ port);});