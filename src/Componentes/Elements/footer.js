import React from "react";
import "../Css/footer.css";

const Footer = () => {
    return (
        <footer>
            <div>
            <div className="contentSection section">
                    <h4>Secciones</h4>
                    <a href="#">Home</a>
                    <a href="#DescriptionSection">Descubre el software</a>
                    <a href="#teamSection">¿Quienes somos?</a>
                </div>
                <div className="contactSection section">
                    <a href="#"/>
                    <h4>Contactanos</h4>
                    <p>visualitv.es@gmail.com</p>
                </div>
                <div className="politicsSection section">
                <h4>Politicas</h4>
                    <a href="">Política de privacidad</a>
                </div>
            </div>
            <h5>© 2023 - Visuali</h5>
        </footer>
    )
}

export default Footer;