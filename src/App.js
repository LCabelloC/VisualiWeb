import './App.css';
import NavBar from './Componentes/Elements/NavBar';
import MainSection from './Componentes/Elements/MainSection';
import Contact from './Componentes/Elements/Contact';
import Equipo from './Componentes/Elements/Equipo';
import DescriptionSection from './Componentes/Elements/DescriptionSection';
import VentajasSection from './Componentes/Elements/VentajasSection';
import MockUpsSection from './Componentes/Elements/MockUpsSection';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <MainSection />
        <DescriptionSection />
        <VentajasSection/>
        <MockUpsSection/>
        <Equipo />
        <Contact />
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
