import React from "react";
import "../Css/MainSection.css";

const MainSection = () => {
    return (
        <section id="mainSection">
            <div className="companyLogo" />
            <h1>TRANSMISIONES DE VIDEO PERSONALIZADAS</h1>
            <p><span>VISUALI</span> te ofrece una experiencia de visualización digital sin igual. <span>Personaliza</span> tus
                pantallas, <span>elige</span> tu contenido favorito y <span>conecta</span> con las personas que más te importan.
                Nuestra <span>inteligencia artificial</span> te sorprenderá con <span>recomendaciones personalizadas</span> y
                <span> resúmenes instantáneos</span>. Descubre una nueva forma de ver contenido digital con Visuali.
                ¡<span>Únete ahora</span> y abre tus ojos a un mundo de posibilidades visuales!
            </p>

            <div className="joinButton2">
                <a href="#contact">ÚNETE</a>
            </div>
        </section>
    )
};

export default MainSection;