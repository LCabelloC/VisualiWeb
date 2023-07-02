import './App.css';
import NavBar from './Componentes/Elements/NavBar';
import MainSection from './Componentes/Elements/MainSection';
import Contact from './Componentes/Elements/Contact';
import Equipo from './Componentes/Elements/Equipo';
import DescriptionSection from './Componentes/Elements/DescriptionSection';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <MainSection />
        <DescriptionSection />
        <Equipo />
        <Contact />
        
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
