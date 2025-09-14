import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import AboutClubs from './components/AboutClubs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/EventCard" element={<LandingPage />} />
        <Route path="/AboutClubs" element={<AboutClubs />} />
        <Route path="/our-team" element={<div className="max-w-6xl mx-auto px-4 py-12"><h1>Our Team</h1><p>Page under construction.</p></div>} />
        <Route path="/support" element={<div className="max-w-6xl mx-auto px-4 py-12"><h1>Support</h1><p>Page under construction.</p></div>} />
      </Routes>
    </Router>
  )
}

export default App
