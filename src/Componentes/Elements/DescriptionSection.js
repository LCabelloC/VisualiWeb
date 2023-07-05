import React, { useEffect, useRef } from 'react';
import '../Css/DescriptionSection.css';

const DescriptionSection = () => {
  const descriptionMockupRef = useRef(null);
  const descriptionRightRef = useRef(null);

  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;

      const mockupElement = descriptionMockupRef.current;
      const rightElement = descriptionRightRef.current;

      const elementPosition = mockupElement.offsetTop;
      const elementHeight = mockupElement.offsetHeight;

      const isInViewport =
        elementPosition < scrollPosition + windowHeight &&
        elementPosition + elementHeight > scrollPosition;

      if (isInViewport) {
        const distance = scrollPosition - elementPosition;
        const progress = distance / windowHeight;

        mockupElement.style.transform = `translateX(${Math.min(progress * 10, 0)}vw)`;
        rightElement.style.transform = `translateX(${Math.max(progress * -10, 0)}vw)`;
      } else {
        mockupElement.style.transform = 'translateX(-50vw)';
        rightElement.style.transform = 'translateX(50vw)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="DescriptionSection">
      <h2>Transforma tu experiencia</h2>
      <div className="description-div">
        <div className="description-mockup" ref={descriptionMockupRef}></div>
        <div className="description-right" ref={descriptionRightRef}>
          <p>Visuali es una plataforma revolucionaria que te permite personalizar y diseñar tu propia experiencia visual en el contenido digital.<br /> <br />
            Con Visuali, tienes el control total sobre lo que ves y cómo lo ves. Además, cuenta con una inteligencia artificial avanzada que te brinda recomendaciones personalizadas basadas en tus intereses, eliminando la necesidad de buscar contenido. <br /> <br />
            La IA de Visuali incluso genera resúmenes de tus experiencias para facilitar el intercambio con otros. Disfruta de una experiencia de visualización digital única y cautivadora, explorando un nuevo mundo de posibilidades y conectando con personas importantes para ti. <br /> <br />
            Descubre Visuali y adéntrate en una nueva era.</p>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
