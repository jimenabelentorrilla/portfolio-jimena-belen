import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Naav from "./components/Naav";
import Skills from "./components/Skillss";
import Proyectos from './components/Proyectos';
import About from "./components/About";
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Naav />
      <Header />
      <Skills />
      <Proyectos />
      <About />
      <Footer />
    </>
  )
}

export default App;
