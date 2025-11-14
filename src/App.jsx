import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutModal from "./components/About";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  return (
    <div>
      <Navbar
        onAboutClick={() => setIsAboutOpen(true)}
        isAboutOpen={isAboutOpen}
      />
      <AboutModal open={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
