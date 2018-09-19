var express = require('express');
var router = express.Router();
var User = require('../model/user');
var multer = require('multer');
var mongoose = require('mongoose');

/* GET home page. */

//multer object
var storage = multer.diskStorage({
  destination: function(request, file, callback) {
    callback(null, 'public/uploads/');
  },
  filename: function(request, file, callback) {
    callback(null, file.originalname + Date.now())
  }
});

var upload = multer({
  storage: storage
});

router.get('/',(req,res) =>{
    res.render('loginSignup')
});

router.post('/register', upload.array('files', 12), function(req, res, next)  {
	console.log("post request accepted")
	console.log(req.body);
	console.log(req.files);
	// console.log(req.files.length);
	console.log(req.files[0].path);
});


module.exports = router;
