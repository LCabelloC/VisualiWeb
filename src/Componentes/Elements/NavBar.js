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
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <li><a href="#mainSection">HOME</a></li>
            <li><a href="#DescriptionSection">DESCUBRE EL SOFTWARE</a></li>
            <li><a href="#teamSection">¿QUIÉNES SOMOS?</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="joinButton">
          <a href="#">ÚNETE</a>
        </div>
      </div>

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <AiOutlineMenu size={32} color="var(--text)" />
      </div>
    </nav>
  );
};

export default NavBar;
