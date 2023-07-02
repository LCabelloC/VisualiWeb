import React from 'react'
import "../Css/DescriptionSection.css";

const DescriptionSection = () => {
  return (
    <section id="DescriptionSection">
        <div className="description-mockup"></div>
        <div className="description-right">
          <h2>Transforma tu experiencia de transmisión digital</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nibh, vitae aliquam nisl nunc id nunc. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nibh, vitae aliquam nisl nunc id nunc.</p>
          <button className='header-button'>Descargar</button>
        </div>
    </section>
  )
}

export default DescriptionSection;