import React from 'react'
import "../Css/DescriptionSection.css";

const DescriptionSection = () => {
  return (
    <section id="DescriptionSection">
      <h2> Transforma tu experiencia</h2>
      <div className="description-div">
        <div className="description-mockup"></div>
        <div className="description-right">

          <p>Visuali es una plataforma revolucionaria que te permite personalizar y diseñar tu propia experiencia visual en el contenido digital.<br /> <br />
            Con Visuali, tienes el control total sobre lo que ves y cómo lo ves. Además, cuenta con una inteligencia artificial avanzada que te brinda recomendaciones personalizadas basadas en tus intereses, eliminando la necesidad de buscar contenido. <br /> <br />
            La IA de Visuali incluso genera resúmenes de tus experiencias para facilitar el intercambio con otros. Disfruta de una experiencia de visualización digital única y cautivadora, explorando un nuevo mundo de posibilidades y conectando con personas importantes para ti. <br /> <br />
            Descubre Visuali y adéntrate en una nueva era.</p>
        </div>
      </div>
    </section>
  )
}

export default DescriptionSection;