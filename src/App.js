import './App.css';
import NavBar from './Componentes/Elements/NavBar';
import Header from './Componentes/Elements/Header';
import MainSection from './Componentes/Elements/MainSection';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <MainSection/>
        <Header />
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
