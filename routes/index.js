var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/',(req,res) =>{
    res.render('index')
});

router.get('/dashboard',(req,res) =>{
    res.render('dashboard')
});

module.exports = router;
