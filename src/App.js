import './App.css';
import NavBar from './componentes/Elements/NavBar';
import MainSection from './componentes/Elements/MainSection';
import Header from './componentes/Elements/Header';

function App() {
  return (
    <>
    <div className="mainsection-div">
          <MainSection/>
    </div>
      <header>
        <NavBar />
      </header>
      <main>
        <Header />
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
