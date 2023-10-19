import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Naav from "./components/Nav/Naav";
import Skills from "./components/Skills/Skills";
import Proyectos from './components/Projects/Proyectos';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Naav />
      <Header />
      <Skills />
      <Proyectos />
      <Footer />
    </>
  )
}

export default App;
