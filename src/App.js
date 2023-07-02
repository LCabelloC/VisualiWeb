import './App.css';
import NavBar from './Componentes/Elements/NavBar';
import Header from './Componentes/Elements/Header';
import MainSection from './Componentes/Elements/MainSection';
import Contact from './Componentes/Elements/Contact';
import Equipo from './Componentes/Elements/Equipo';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <MainSection/>
        <Header />
        <Equipo />
        <Contact />
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
