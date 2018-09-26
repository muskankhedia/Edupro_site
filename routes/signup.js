var express = require('express');
var router = express.Router();
var User = require('../model/user');
var multer = require('multer');
var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');

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
  
  let errors =[];

  if(req.body.password != req.body.password2){
    errors.push({text:'Passwords do not match'});
      }

  if(req.body.password.length < 4){
    errors.push({text:'Passwords must be atleast 4 characters' });
  }

  if(errors.length > 0){
    res.render('loginSignup',{
        errors:errors,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        password2:req.body.password2

    });
  }
  else{
    User.findOne({email:req.body.email})
      .then(user => {
        if(user){
          req.flash('error_msg','Email already registered');
          res.redirect('/register');
        }
      })
    const newUser = new User({
      name:req.body.username,
      email : req.body.email,
      password : req.body.password
    });

    bcrypt.genSalt(10, (err,salt) =>{
      bcrypt.hash(newUser.password,salt,(err,hash) =>{
        if(err) throw err;
        newUser.password = hash;
        newUser.save()
          .then(user => {
            req.flash('success_msg',"You are now registered and login");
            res.redirect('/register');
          })
          .catch(err =>{
            console.log(err);
            return;
          });

      });
    })
    res.render(loginSinup);
  }
});


module.exports = router;
