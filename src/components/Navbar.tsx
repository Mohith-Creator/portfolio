import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - 100 &&
          scrollPosition < sectionTop + sectionHeight - 100
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-indigo-600">
          {" "}
          &lt;Mohith Reddy /&gt;
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize ${
                activeSection === section
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-600 hover:text-indigo-600"
              } transition-colors duration-300`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize ${
                    activeSection === section
                      ? "text-indigo-600 font-semibold"
                      : "text-gray-600"
                  } transition-colors duration-300`}
                >
                  {section}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
