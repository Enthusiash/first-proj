import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Schedule from './components/Schedule'
import Materials from './components/Materials'
import About from './components/About'
import Footer from './components/Footer'
import Appointment from './components/Appointment';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
