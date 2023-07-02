import React from 'react'
import "../Css/DescriptionSection.css";

const DescriptionSection = () => {
  return (
    <section id="DescriptionSection">
        <div className="header-mockup"></div>
        <div className="header-right">
          <h2 className='header-slogan'>La app del futuro ya está aqui</h2>
          <p className='header-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nibh, vitae aliquam nisl nunc id nunc. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nibh, vitae aliquam nisl nunc id nunc.</p>
          <button className='header-button'>Descargar</button>
        </div>
    </section>
  )
}

export default DescriptionSection;