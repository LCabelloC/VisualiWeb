import React from 'react'
import '../Css/Equipo.css'
import Persona from './Persona'

const Equipo = () => {
  return (
    <section id="teamSection">
      <div className="title">
        <div className="decoration">
          <div className="line1"/>
          <div className="line2"/>
          <div className="line3"/>
        </div>
        <h2 className="equipo-titulo">Quienes somos</h2>
      </div>
      <div className="equipo">
        <Persona nombre="Luis Cabello" foto="/luis.webp" puesto="CEO" descripcion="Front-End" url="https://www.linkedin.com/in/luiscabellocasquete/" />
        <Persona nombre="Javier Cubas" foto="/javier.webp" puesto="CTO" descripcion="Inteligencia Artificial" url="https://www.linkedin.com/in/javier-cubas/" />
        <Persona nombre="Sergio Benedicto" foto="/sergio.webp" puesto="COO" descripcion="Integraciones" url="https://www.linkedin.com/in/sergio-benedicto-vizoso-4361ba234/" />
        <Persona nombre="Christian Yang" foto="/christian.webp" puesto="CMO" descripcion="Ventas" url="https://www.linkedin.com/in/christian-yang-gonzalez-12ba52273/" />
      </div>
    </section>
  )
}

export default Equipo