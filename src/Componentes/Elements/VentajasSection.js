import React from "react";
import VentajasCard from "./VentajasCard";
import "../Css/Ventajas.css";

import SmallLogo from "../Assets/VisualiSmallLogo.png"

const VentajasSection = () => {

    return(
        <section id="ventajasSection">
            <h2>Ventajas</h2>
            <div className="cardSection">

                <VentajasCard
                img={SmallLogo}
                title="FÁCIL DE CONFIGURAR"
                description="Experimenta la revolución de la personalización visual con
                Visuali: ¡configuración en menos de 1 minuto! Con nuestra plataforma
                innovadora, podrás transformar tu pantalla a tu gusto de forma rápida y sencilla.
                Descubre la libertad de ver exactamente lo que deseas en un abrir y cerrar de ojos.
                Olvídate de configuraciones complicadas y sumérgete en una experiencia visual
                cautivadora al instante. ¡Visuali te ofrece una configuración fácil y rápida para
                que disfrutes de una experiencia visual personalizada en tiempo récord!"/>

                <VentajasCard img={SmallLogo} title="ALL IN ONE" description="a"/>
                <VentajasCard img={SmallLogo} title="INTELIGENCIA ARTIFICIAL" description="a"/>
            </div>

        </section>
    );
}

export default VentajasSection;