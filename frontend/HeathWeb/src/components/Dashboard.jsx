import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// A simple loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center mt-10">
    <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-transparent border-gray-200" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function Dashboard() {
  const [patientData, setPatientData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/patients', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setPatientData(data);
        } else {
          console.error('Failed to fetch data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching patient data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  // Filtering patient data based on the search query
  const filteredPatients = patientData.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link to="/" className='bg-[#3DBAA1] p-2 text-white rounded'>Back to Home</Link>
      <h2 className="text-3xl font-bold text-center text-gray-800">Dashboard</h2>

      {/* Search bar for filtering patients */}
      <div className="mt-5 flex justify-center">
        <input
          type="text"
          placeholder="Search by patient name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-1/3"
        />
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-700">Patient Information</h3>
        <table className="w-full mt-4 border-collapse table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Age</th>
              <th className="border p-2 text-left">Report</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient, index) => (
                <tr key={index} className="hover:bg-gray-100 cursor-pointer">
                  <td className="border p-2">{patient.name}</td>
                  <td className="border p-2">{patient.age}</td>
                  <td className="border p-2">{patient.report}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-600">No patients found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination (for large data sets) */}
      <div className="mt-5 flex justify-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Previous</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded ml-2">Next</button>
      </div>
    </div>
  );
}

export default Dashboard;
