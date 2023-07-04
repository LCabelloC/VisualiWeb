import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import "../Css/NavBar.css";

const NavBar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.1;

      if (scrollPosition >= scrollThreshold) {
        setIsFixed(true);
        document.documentElement.classList.add('scrolled');
      } else {
        setIsFixed(false);
        document.documentElement.classList.remove('scrolled');
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  return (
    <nav className={`nav ${isFixed ? "fixed" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="logo">
        <a href="#mainSection"></a>
      </div>
      <div className="navAll">
        <div className="movil-title">
          <h2>Menu principal</h2>
          <FaTimes size={32} color="var(--logo)" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
        <div className="navLinks">
          <ul>
            <li onClick={() => setIsMenuOpen(false)}><a href="#mainSection">HOME</a></li>
            <li onClick={() => setIsMenuOpen(false)}><a href="#DescriptionSection">DESCUBRE EL SOFTWARE</a></li>
            <li onClick={() => setIsMenuOpen(false)}><a href="#teamSection">¿QUIÉNES SOMOS?</a></li>
          </ul>
        </div>
        <div className="joinButton" onClick={() => setIsMenuOpen(false)}>
          <a href="#contact">ÚNETE</a>
        </div>
      </div>

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <AiOutlineMenu size={32} color="var(--text)" />
      </div>
    </nav>
  );
};

export default NavBar;