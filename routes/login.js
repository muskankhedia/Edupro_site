var express = require('express');
var router = express.Router();

/* GET home page. */

// router.get('/',(req,res) =>{
//     res.render('login')
// });

router.get('/',function(req, res, next) {
  res.render('login');
});

module.exports = router;
