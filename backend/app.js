const express =require('express')
const cors = require('cors');
const axios =require('axios')
const app =express()
const paitentModel =require('./models/paitent')
const Doctor =require('./models/doctorModel')
const Appointment =require('./models/appointmentModel')
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


dotenv.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Sample health tips database
const healthTips = {
  "hi": "Hello! How can I assist you with your health today?",
  "hello": "Hi there! Feel free to ask any health-related questions.",
  "good morning": "Good morning! How are you feeling today?",
  "good afternoon": "Good afternoon! Let me know if I can help with any health tips.",
  "good evening": "Good evening! How can I assist you with your health?",
  
  "cough": "Drink warm liquids, get plenty of rest, and avoid cold drinks.",
  "fever": "Stay hydrated, rest, and monitor your temperature regularly.",
  "headache": "Try to rest in a quiet, dark room, and consider using a cold compress.",
  "sore throat": "Gargle with warm salt water and drink soothing teas with honey.",
  "stomach ache": "Eat small, light meals and avoid fatty or spicy foods.",
  "nausea": "Sip ginger tea, and try eating small amounts of bland food like crackers.",
  "fatigue": "Ensure you're getting enough sleep, staying hydrated, and eating balanced meals.",
  "allergies": "Try over-the-counter antihistamines and avoid known allergens.",
  "back pain": "Apply a warm or cold compress, practice gentle stretching, and consider improving your posture.",
  "muscle pain": "Apply ice initially, followed by heat. Rest the area and try gentle stretching.",
  "constipation": "Increase your fiber intake, drink more water, and consider mild physical activity.",
  "diarrhea": "Stay hydrated with oral rehydration solutions and avoid rich, fatty foods.",
  "cold": "Drink warm fluids, rest, and try steam inhalation to clear nasal passages.",
  "stress": "Practice deep breathing, consider meditation, and take breaks to unwind.",
  "anxiety": "Try breathing exercises, stay active, and talk to a friend or professional if needed.",
  "insomnia": "Establish a regular sleep schedule, avoid screens before bed, and try relaxation techniques.",
  "acne": "Wash your face gently twice a day, avoid touching your face, and use non-comedogenic skincare.",
  "dry skin": "Moisturize regularly, avoid hot showers, and drink plenty of water.",
  "sunburn": "Apply aloe vera gel, stay hydrated, and avoid further sun exposure until healed.",
  "high blood pressure": "Reduce salt intake, exercise regularly, and avoid excessive caffeine or alcohol.",
  "heartburn": "Avoid acidic or spicy foods, eat smaller meals, and don’t lie down immediately after eating.",
  "eye strain": "Take breaks from screens, adjust lighting, and practice the 20-20-20 rule (look at something 20 feet away every 20 minutes for 20 seconds).",
  "joint pain": "Apply heat or cold packs, try gentle exercises, and avoid activities that strain the joint.",
  "dizziness": "Sit or lie down immediately, stay hydrated, and avoid sudden movements."
};

// Endpoint to get health tips based on symptoms
app.post('/api/getHealthTip', (req, res) => {
  const { symptom } = req.body;
  const advice = healthTips[symptom.toLowerCase()] || "Consult a healthcare provider for advice.";
  res.json({ advice });
});

// (Optional) Endpoint to integrate third-party AI medical API for more complex analysis
app.post('/api/getAIAdvice', async (req, res) => {
  const { symptom } = req.body;
  try {
      const response = await axios.post('https://some-medical-ai-api.com/analyze', { symptom }, {
          headers: { 'Authorization': `Bearer ${process.env.API_KEY}` }
      });
      res.json({ advice: response.data.advice });
  } catch (error) {
      res.status(500).json({ error: 'Error retrieving AI advice' });
  }
});

app.get("/" ,(req,res)=>{
  res.send("Hello world");
})

app.post("/api/register",async (req,res)=>{
  try {
    const {name ,email,password} =req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser =await paitentModel({
      name,
      email,
      password:hashedPassword
    });

    await newUser.save();
    res.status(201).json({message :" user registered succesfully "})
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
})

app.post("/api/login" ,async (req,res)=>{
  const {email,password} =req.body;
  
  try {
    // check if the user exist
    const user =await paitentModel.findOne({email});
    if(!user){
      return res.status(400).json({message:"Invalid email & password "})
    }
    // compare the provider password with the hashed password 
    const isMatch =await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(400).json({message:"Invalid email & password "});
    }
     // Generate a JWT token
    const token =jwt.sign({userId:user.id},'12hh12hcc',{expiresIn:'1h'});
    // respond with the token 

    res.status(200).json({message:"Login Succesfully ",token})
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
})

app.get('/api/dashboard', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; // Get token from Authorization header

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, '12hh12hcc', (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });

    // Return dashboard content if user is authenticated
    res.json({ message: 'Welcome to your dashboard!' });
  });
});




app.post('/api/appointments', async (req, res) => {
  const { doctorId, patientName, patientEmail, appointmentDate, symptoms } = req.body;

  try {
    // Validate input
    if (!doctorId || !patientName || !patientEmail || !appointmentDate) {
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    // Create and save the new appointment
    const newAppointment = new Appointment({
      doctorId,
      patientName,
      patientEmail,
      appointmentDate,
      symptoms,
    });

    await newAppointment.save();

    // Send success response
    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (error) {
    console.error("Error booking appointment:", error); // Logs error details for debugging
    res.status(500).json({ message: 'Error booking appointment' });
  }
});


app.listen(process.env.PORT ,() =>{
  console.log("Server is running on port 3000")
})