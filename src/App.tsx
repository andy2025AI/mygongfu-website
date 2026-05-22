import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import GeoService from "@/pages/GeoService";
import FdeService from "@/pages/FdeService";
import Cases from "@/pages/Cases";
import About from "@/pages/About";
import Column from "@/pages/Column";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/geo" element={<GeoService />} />
        <Route path="/services/fde" element={<FdeService />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/about" element={<About />} />
        <Route path="/column" element={<Column />} />
      </Routes>
    </Router>
  );
}
