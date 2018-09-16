'use strict';
const express = require('express');
const app = express();
app.set('port',process.env.PORT || 3000);

app.get('/',(req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/dashboard',(req,res) =>{
    res.sendFile(__dirname + '/dashboard.html')
})


app.listen(app.get('port'), () =>{
    console.log('SmartBitHack at port:' , app.get('port'));
})

