import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { business } from "../data/BusinessData";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", hash: "#services" },
    { label: "About", hash: "#about" },
    { label: "Reviews", hash: "#reviews" },
    { label: "Contact", hash: "#contact" },
  ];

  const scrollTo = (hash: string) => {
    setOpen(false);
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 200);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-pink-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="text-lg md:text-xl font-bold text-gray-900 oswald tracking-tight bg-transparent border-none cursor-pointer"
        >
          Beauty Essentials{" "}
          <span style={{ color: business.colorPrimary }}>Nails & Spa</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => scrollTo(l.hash)}
                className="text-sm font-medium text-gray-500 hover:text-pink-700 transition-colors cursor-pointer bg-transparent border-none"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={business.phoneTel}
          className="hidden md:inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-md"
          style={{ backgroundColor: business.colorPrimary }}
        >
          📞 {business.phone}
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700 bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-pink-100 px-5 pb-5 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.hash)}
              className="text-sm font-medium text-gray-600 hover:text-pink-700 text-left bg-transparent border-none cursor-pointer py-1"
            >
              {l.label}
            </button>
          ))}
          <a
            href={business.phoneTel}
            className="text-white text-center py-3 rounded-lg font-semibold text-sm"
            style={{ backgroundColor: business.colorPrimary }}
          >
            📞 Call Now — {business.phone}
          </a>
        </div>
      )}
    </nav>
  );
}
