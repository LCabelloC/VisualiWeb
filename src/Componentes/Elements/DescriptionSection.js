import React from 'react'
import "../Css/DescriptionSection.css";

const DescriptionSection = () => {
  return (
    <section id="DescriptionSection">
        <div className="description-mockup"></div>
        <div className="description-right">
          <h2> Transforma tu experiencia</h2>
          <p>Visuali es una innovadora plataforma que revoluciona la forma en que
            disfrutas del contenido digital. Con Visuali, podrás crear tu propia
            experiencia visual personalizada, diseñando la pantalla que desees y
            seleccionando el contenido que más te interese. ¡Imagina tener el
            control total sobre lo que ves y cómo lo ves!<br /><br />

            Pero eso no es todo. Visuali te ofrece una inteligencia artificial avanzada
            que estará a tu disposición para brindarte recomendaciones personalizadas basadas
            en tus intereses. No tendrás que buscar contenido, ¡el contenido te encontrará a
            ti! Además, la IA de Visuali puede generar resúmenes de tus experiencias, para
            que puedas compartir fácilmente tus momentos favoritos con otros.<br /><br />

            Con Visuali, disfrutarás de una experiencia de visualización digital única y
            cautivadora. Ya no estarás limitado por las restricciones de las plataformas
            tradicionales, sino que podrás explorar un nuevo mundo de posibilidades y
            conectar con las personas que más te importan.<br /><br />

            ¡Descubre Visuali y sumérgete en una nueva era de visualización digital!</p>
          <button className='header-button'>Descargar</button>
        </div>
    </section>
  )
}

export default DescriptionSection;