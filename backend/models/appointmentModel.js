const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor' 
      },
  patientName: String,
  patientEmail: String,
  appointmentDate: Date,
  symptoms: String,
});

module.exports = mongoose.model('Appointment', appointmentSchema);