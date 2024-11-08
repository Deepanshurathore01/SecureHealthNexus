const mongoose =require('mongoose')

const doctorSchema =new mongoose.Schema({
  name :String,
  specilization:String,
  availability:[String],
});

module.exports =mongoose.model('Doctor' ,doctorSchema);