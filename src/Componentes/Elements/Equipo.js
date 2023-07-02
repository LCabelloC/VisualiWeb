import React from 'react'
import '../Css/Equipo.css'
import Persona from './Persona'

const Equipo = () => {
  return (
    <section id="teamSection">
        <h2 className="equipo-titulo">Quienes somos</h2>
        <div className="equipo">
        <Persona nombre="Luis Cabello" foto="https://media.licdn.com/dms/image/D4D03AQFFNkjIKpX9sA/profile-displayphoto-shrink_400_400/0/1669633186104?e=1694044800&v=beta&t=FDbV0_47lvOFOrqhi9dAIof2YSPefkmR36zqFb8E_-Q" puesto="CEO" descripcion="Front-End" url="https://www.linkedin.com/in/luiscabellocasquete/" />
        <Persona nombre="Javier Cubas" foto="https://media.licdn.com/dms/image/C5603AQHhkHaWhai8Mg/profile-displayphoto-shrink_800_800/0/1623331064330?e=1694044800&v=beta&t=iaOByfxl4FzQXcYlwr4r4LVtiHvx8vKjdTzp3YJzxcc" puesto="CTO" descripcion="Inteligencia Artificial" url="https://www.linkedin.com/in/javier-cubas/" />
        <Persona nombre="Sergio Benedicto" foto="https://media.licdn.com/dms/image/D4D03AQHdeTrKcdrZOA/profile-displayphoto-shrink_400_400/0/1688314350571?e=1694044800&v=beta&t=af_e0_6nXADQ5fIsCbpyYPgGwIIrfYXYkSBvLMHBbeM" puesto="COO" descripcion="Integraciones" url="https://www.linkedin.com/in/sergio-benedicto-vizoso-4361ba234/" />
        <Persona nombre="Christian Yang" foto="https://media.licdn.com/dms/image/D4D03AQEFZE-iq-QCQw/profile-displayphoto-shrink_400_400/0/1688136313794?e=1694044800&v=beta&t=-Cm6Fvj19g6esU1xTpEXAtvnV2Up0w3AOdTuhV0qpzQ" puesto="CMO" descripcion="Ventas" url="https://www.linkedin.com/in/christian-yang-gonzalez-12ba52273/" />
        </div>
    </section>
  )
}

export default Equipo