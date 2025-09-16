import { Routes, Route, useLocation, useOutlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Clubs from "./pages/Clubs";
import Team from "./pages/Team";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ClubDetail from "./pages/ClubDetail";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 md:px-8 py-6">
        <AnimatePresence mode="wait">
          {outlet && React.cloneElement(outlet, { key: location.pathname })}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/clubs/:id" element={<ClubDetail />} />
            <Route path="/our-team" element={<Team />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
