import React from "react";
import "../Css/MockUps.css"

const MockUpsSection = () => {
    return (
        <section id="MockUps">
            <div className="content">
                <h3>INTERFAZ INTERACTIVA</h3>
                <p>Experiencia visualmente atractiva con una navegación intuitiva</p>
            </div>
            <div className="img1 img" />
            <div className="img2 img" />
            <div className="content">
                <h3>CATÁLOGO PERSONALIZADO</h3>
                <p> Explora y personaliza tu experiencia única con la ayuda de la IA
                    en un catálogo personalizado que te ofrece una
                    experiencia inigualable.</p>
            </div>
            <div className="content">
                <h3>EXPERIENCIA INMERSIVA</h3>
                <p>Disfruta de tus eventos de una manera única, personalizada y llena de sorpresas.</p>
            </div>
            <div className="img3 img" />
        </section>

    );
}

export default MockUpsSection;