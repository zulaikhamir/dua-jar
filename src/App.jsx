import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import VirtualDuaJar from "./components/Jar";
import "./App.css";

function Home() {
  let navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 text-primary">Don't be sad!</h1>
      <button className="btn btn-success" onClick={() => navigate("/jar")}>
        Click Me
      </button>
    </div>
  );
}

function App() {
  return (
    <Router basename="/dua-jar">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jar" element={<VirtualDuaJar />} />
      </Routes>
    </Router>
  );
}

export default App;
