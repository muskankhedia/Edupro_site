var express = require('express');
var router = express.Router();

const passport = require('passport');

/* GET home page. */

// router.get('/',(req,res) =>{
//     res.render('login')
// });

router.get('/',function(req, res, next) {
	console.log("login called")
	res.render('loginSignup');
});


router.post('/login', (req,res,next) => {
	passport.authenticate('local',{
		successRedirect :'/login',
		failureRedirect: '/login',
		failureFlash:true
	})(req,res,next);
});



// router.post('/login',function(req,res){
// 	var username = req.body.username;
// 	var password = req.body.password;
// 	User.findOne({username:username,password:password},function(err,user){
// 		if(err){
// 			console.log(err);
// 			return res.status(500).send();
// 		}
// 		if(user){
// 			return res.status(404).send();
// 		}

// 		return res.status(200).send();
// 	})
// });


module.exports = router;
