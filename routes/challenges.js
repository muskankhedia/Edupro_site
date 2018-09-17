var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/',(req,res) =>{
    res.render('challenges')
});

module.exports = router;
