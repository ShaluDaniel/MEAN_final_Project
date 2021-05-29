const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
const jwt = require('jsonwebtoken');
username:"admin";
password:"12345";
app.get('/student-login', (req,res)=>{
    let userData=req.body
    if (!username){
        res.status(401).send('Invalid Username')

    }
    else if (password!==userData.password){
        res.status(401).send('Invalid Password')
    }

    else{
        let payload={subject:username+password}
        let token=jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
    }

    
});