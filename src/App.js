import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DoctorList from './components/DoctorList';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <DoctorList onSelect={setSelectedDoctor} />
                <AppointmentForm doctor={selectedDoctor} />
              </>
            }
          />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<DoctorList onSelect={setSelectedDoctor} />} />
        <Route path="/appointment" element={<AppointmentForm doctor={selectedDoctor} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
