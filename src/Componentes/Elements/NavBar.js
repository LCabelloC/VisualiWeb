import React, { useEffect, useState } from "react";
import "../Css/NavBar.css";

const NavBar = () => {
  const [isFixed, setIsFixed] = useState(false);

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
    <nav className={`nav ${isFixed ? "fixed" : ""}`}>
      <div className="logo">
        <a href="#mainSection"></a>
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
    </nav>
  );
};

export default NavBar;
