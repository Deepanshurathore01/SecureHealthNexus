import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import { RegistrationPage } from './components';
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard';
import AppointmentForm from './components/AppointmentForm';
import Home from './components/Home';


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/register' element={<RegistrationPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/appointment' element={<AppointmentForm />} />
    </Routes>
    </Router>
  )
}

export default App
