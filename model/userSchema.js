import mongoose from 'mongoose';
const studentSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    course: String,
    regno:String,
    phno: String
});


const students = mongoose.model('student', studentSchema);
export default students;
