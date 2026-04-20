import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactBar from "./components/ContactBar";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import "./index.css";
import { business } from "./data/BusinessData";

function Footer() {
  return (
    <footer className="bg-[#4a0720] text-pink-200 text-center py-6 text-sm px-4">
      © 2025{" "}
      <span className="text-white font-semibold">Beauty Essentials Nails & Spa</span>{" "}
      — {business.address} ·{" "}
      <a href={business.phoneTel} className="text-pink-300 hover:text-white transition-colors">
        {business.phone}
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
