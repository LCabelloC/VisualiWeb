import React from "react";
import VentajasCard from "./VentajasCard";
import "../Css/Ventajas.css";

import Confi from "../Assets/configuration.webp";
import ai from "../Assets/ai.webp";
import allIn1 from "../Assets/allin1.webp";

const VentajasSection = () => {

    return (
        <section id="ventajasSection">
            <h2>Ventajas</h2>
            <div className="cardSection">

                <VentajasCard
                    img={Confi}
                    title="FÁCIL DE CONFIGURAR"
                    description="Configuración en segundos para una experiencia visual personalizada al instante. 
                    Olvídate de las complicaciones y disfruta de la revolución visual. ¡Transforma tu pantalla con 
                    facilidad y sumérgete en una experiencia cautivadora!" />

                <VentajasCard
                    img={allIn1}
                    title="ALL IN ONE"
                    description="Descubre la comodidad del all in one con Visuali: todo en un
                solo lugar. Simplifica tu proceso creativo, maximiza tu productividad.
                Personaliza, diseña y experimenta sin complicaciones. Todo al alcance de
                tu mano con Visuali."/>

                <VentajasCard
                    img={ai}
                    title="INTELIGENCIA ARTIFICIAL"
                    description="Descubre la magia de la inteligencia artificial con Visuali. Recibe
                recomendaciones personalizadas y comparte experiencias resumidas. Conéctate con un
                nuevo mundo de posibilidades gracias a la IA de Visuali."/>

            </div>

        </section>
    );
}

export default VentajasSection;