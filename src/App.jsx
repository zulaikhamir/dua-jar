import { useState } from "react";
import Navbar from "./layouts/Navbar";
import DuaJar from "./pages/Hero";
import AboutModal from "./components/About";
import Footer from "./layouts/Footer";

import "./index.css";

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  return (
    <div>
      <Navbar onAboutClick={() => setIsAboutOpen(true)} />
      <AboutModal open={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <DuaJar />
      <Footer />
    </div>
  );
}

export default App;
