import React from "react";
import "../Css/NavBar.css";
import Logo from "../Assets/VisualiSmallLogo.png";

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <a href="#mainSection">
                    <img src={Logo} alt="Company logo" />
                </a>
            </div>
            <div className="navLinks">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">DECUBRE EL SOFTWARE</a></li>
                    <li><a href="#">¿QUIÉNES SOMOS?</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
           <div className="joinButton">
                <a href="#">ÚNETE</a>
           </div>
        </nav>
    );
}

export default NavBar;