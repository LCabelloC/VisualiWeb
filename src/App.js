import './App.css';
import NavBar from './Componentes/Elements/NavBar';
import MainSection from './Componentes/Elements/MainSection';
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
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
