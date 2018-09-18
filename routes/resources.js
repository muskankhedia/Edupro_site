var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/',(req,res) =>{
    res.render('resources')
});

router.get('/articles',(req,res) =>{
    res.render('articles')
});

module.exports = router;
