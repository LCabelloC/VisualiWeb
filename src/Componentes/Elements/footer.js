import React from "react";
import "../Css/footer.css";

const Footer = () => {
    return (
        <footer>
            <div>
                <a className="footer-foto" href="#" />
                <a href="mailto:visualitv.es@gmail.com" className="correo">visualitv.es@gmail.com</a>
                <p className="copy">© Visuali - 2023</p>
            </div>
            <div>
                <a href="/privacidad.pdf" target="_blank" rel="noopener noreferrer">Política de privacidad</a>
                <a href="/terminos-condiciones.pdf" target="_blank" rel="noopener noreferrer">Términos y condiciones</a>
            </div>



        </footer>
    )
}

export default Footer;