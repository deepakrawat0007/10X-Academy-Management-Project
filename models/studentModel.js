const mongoose= require('mongoose');
const Schema = mongoose.Schema

const StudentModel = new Schema({
    name:{type:String , required:true},
    classId:{type:Number , required:true}   

})

const Student = mongoose.model('students' , StudentModel)
module.exports = Student;