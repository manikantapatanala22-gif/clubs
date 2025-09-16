import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Clubs from "./pages/Clubs";
import Team from "./pages/Team";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ClubDetail from "./pages/ClubDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen px-4 md:px-8 py-6">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/events" element={<Events />} />
    <Route path="/clubs" element={<Clubs />} />
    <Route path="/our-team" element={<Team />} />
    <Route path="/clubs/:id" element={<ClubDetail />} />
    <Route path="/support" element={<Support />} />
    <Route path="/login" element={<Login />} />
  </Routes>
</main>
 <Footer />
    </Router>
   
  );
}

export default App;
