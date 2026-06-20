import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    // If not on homepage, disable section highlighting
    if (location.pathname !== "/" && location.pathname !== "") {
      setActiveSection("");
      return;
    }

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [location.pathname]);

  const linkClass = (id) =>
    activeSection === id
      ? "text-green-400 font-semibold"
      : "text-white hover:text-green-400";

  return (
    <nav className="bg-black text-white shadow-md fixed w-full top-0 left-0 z-50 border-b border-gray-700 px-6">
      <div className="w-full flex justify-between items-center px-6 py-4">
        <h3 className="text-xl font-bold text-white">Aisha Arowolo</h3>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {/* HOME */}
          <Link to="/#home" className={linkClass("home")}>
            Home
          </Link>

          {/* PORTFOLIO */}
          <Link
            to="/portfolio"
            className={
              location.pathname === "/portfolio"
                ? "text-green-400 font-semibold"
                : "text-white hover:text-green-400"
            }
          >
            Portfolio
          </Link>

          {/* CONTACT */}
          <Link to="/#contact" className={linkClass("contact")}>
            Contact
          </Link>
        </div>


        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-2xl text-green-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black shadow-md p-6 space-x-4 text-center text-white">
          <Link
            onClick={() => setOpen(false)}
            to="/#home"
            className={linkClass("home")}
          >
            Home
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/portfolio"
            className={
              location.pathname === "/portfolio"
                ? "text-green-400 font-semibold"
                : "text-white hover:text-green-400"
            }
          >
            Portfolio
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/#contact"
            className={linkClass("contact")}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
