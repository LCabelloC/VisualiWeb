import React from 'react'
import MainSection from '../Componentes/Elements/MainSection'
import DescriptionSection from '../Componentes/Elements/DescriptionSection'
import VentajasSection from '../Componentes/Elements/VentajasSection'
import MockUpsSection from '../Componentes/Elements/MockUpsSection'
import Equipo from '../Componentes/Elements/Equipo'
import Contact from '../Componentes/Elements/Contact'

const home = () => {
    return (
        <main>
            <MainSection />
            <DescriptionSection />
            <VentajasSection />
            <MockUpsSection />
            <Equipo />
            <Contact />
        </main>
    )
}

export default home