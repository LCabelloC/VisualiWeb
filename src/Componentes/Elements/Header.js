import React from 'react'
import "../Css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-mockup"></div>
      <div className="header-right">
        <h2 className='header-slogan'>La app del futuro ya está aqui</h2>
        <p className='header-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nibh, vitae aliquam nisl nunc id nunc. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nibh, vitae aliquam nisl nunc id nunc.</p>
        <button className='header-button'>Descargar</button>
      </div>

    </div>
  )
}

export default Header