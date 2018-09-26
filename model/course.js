const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    category:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    video_link1:{
        type:String,
        required:true
    },
    video_link2:{
        type:String
    },

    video_link3:{
        type:String
    },

    video_link4:{
        type:String
    },

    author:{
        type:string,
        required:true
    }
});

mongoose.model('courses',CourseSchema);