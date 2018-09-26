var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  institute: String,
  github: String,
  linkedin: String,
  profession: { type: Boolean, default: false },
  image: String
},{ collection:'Users'});



// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('Users', userSchema);


// Users.create({name: Admin, password:admin}, function(err, doc) {
//   // At this point the jobs collection is created.

// });


// make this available to our users in our Node applications
module.exports = User;
