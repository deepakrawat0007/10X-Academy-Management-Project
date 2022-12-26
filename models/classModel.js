const mongoose= require('mongoose');
const Schema = mongoose.Schema

const ClassModel = new Schema({
    id:{type:Number , required :true},
    class:{type:Array , required:true},
    studentsCounts:{type:Number , required:true}   

})

const Classes = mongoose.model('clasess' , ClassModel)
module.exports = Classes;