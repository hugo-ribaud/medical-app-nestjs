import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import AppointmentList from './components/Appointments/AppointmentList';
import AppointmentForm from './components/Appointments/AppointmentForm';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen bg-gray-100'>
        <Header />
        <main className='flex-grow container mx-auto mt-8 mb-8'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/appointments'
              element={<AppointmentList />}
            />
            <Route
              path='/book-appointment'
              element={<AppointmentForm />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
