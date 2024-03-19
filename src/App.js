import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Students from './Pages/Students/students';
import Footer from './Components/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/students" element={<Students />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
