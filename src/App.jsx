import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reg from "./Reg";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/h" element={<Home />} />
          <Route path="/reg" element={<Reg />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;