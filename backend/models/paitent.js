const mongoose =require('mongoose')

mongoose.connect(`mongodb://127.0.0.1:27017/healthcare`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const paitentSchema =mongoose.Schema({
  name:String,
  email:String,
  password:String,
})

module.exports =mongoose.model("paitent" ,paitentSchema);