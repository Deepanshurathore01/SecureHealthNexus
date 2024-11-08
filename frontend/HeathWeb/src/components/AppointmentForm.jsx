import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    doctorId: '',
    patientName: '',
    patientEmail: '',
    appointmentDate: '',
    symptoms: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Dummy doctor data for testing
  const dummyDoctors = [
    { _id: '1', name: 'Dr. A.V. Saxena', specialty: 'Cardiologist' },
    { _id: '2', name: 'Dr. B.K. Sharma', specialty: 'Neurologist' },
    { _id: '3', name: 'Dr. C. Gupta', specialty: 'Orthopedic Surgeon' },
    { _id: '4', name: 'Dr. D. Mehta', specialty: 'Dermatologist' },
    { _id: '5', name: 'Dr. E. Singh', specialty: 'General Physician' },
  ];

  useEffect(() => {
    // Set dummy doctor data when component mounts
    setDoctors(dummyDoctors);
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // In a real app, you would post the data to your server
      // For now, we simulate a success response
      setMessage('Appointment booked successfully');
      alert('Appointment booked successfully'); // Show success alert
      navigate('/dashboard'); // Redirect to dashboard or appointments page
    } catch (error) {
      setMessage('Failed to book appointment');
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Doctor selection */}
        <div>
          <label className="block text-gray-700">Doctor:</label>
          <select
            name="doctorId"
            value={formData.doctorId}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor._id} value={doctor._id}>
                {doctor.name} - {doctor.specialty}
              </option>
            ))}
          </select>
        </div>

        {/* Patient name */}
        <div>
          <label className="block text-gray-700">Patient Name:</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Patient email */}
        <div>
          <label className="block text-gray-700">Patient Email:</label>
          <input
            type="email"
            name="patientEmail"
            value={formData.patientEmail}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Appointment date */}
        <div>
          <label className="block text-gray-700">Appointment Date:</label>
          <input
            type="datetime-local"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Symptoms */}
        <div>
          <label className="block text-gray-700">Symptoms:</label>
          <textarea
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-[#3DBAA1] text-white py-2 rounded-md font-semibold hover:bg-[#3DBAA1] focus:outline-none"
        >
          Book Appointment
        </button>
      </form>

      {/* Success or error message */}
      {message && (
        <p className="mt-4 text-center text-sm font-semibold text-red-500">
          {message}
        </p>
      )}
    </div>
  );
};

export default AppointmentForm;
