import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TempleNotice from './components/TempleNotice';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import Trustees from './pages/Trustees';
import ExecutiveMembers from './pages/ExecutiveMembers';
import './App.css';

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <TempleNotice />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/trustees" element={<Trustees />} />
            <Route path="/executive-members" element={<ExecutiveMembers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
