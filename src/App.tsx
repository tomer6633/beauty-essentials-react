import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactBar from "./components/ContactBar";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import "./index.css";

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-500 text-center py-5 text-sm px-4">
      © 2025{" "}
      <span className="text-blue-400 font-semibold">Beauty Essentials Nails & Spa</span>{" "}
      — London, ON · 1475 North Vernon Ave ·{" "}
      <a href="tel:5192751009" className="text-blue-400 hover:text-blue-300">
        (519) 275-1009
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
          </Routes>
        </div>
        <Footer />
        <ContactBar />
      </div>
    </HashRouter>
  );
}
