import React from "react";
import "../Css/NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <div className="logo" />
            <div className="navLinks">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">DECUBRE EL SOFTWARE</a></li>
                    <li><a href="#">¿QUIÉNES SOMOS?</a></li>
                    <li><a href="#">ÚNETE</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;