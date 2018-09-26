var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/',(req,res) =>{
    res.render('mentor')
});

//Add Idea Form
router.get('/add',(req,res) =>{
    res.render('coursesform')
});

//Process Form 


module.exports = router;