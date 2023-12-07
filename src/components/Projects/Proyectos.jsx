import './Projects.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/**assets**/
import ProyectoUno from "../../assets/mov.jpg";
import ProyectoDos from "../../assets/streaming.png";
import ProyectoTres from "../../assets/gourmet.jpg";


export const Proyecto = ({ imagen, titulo, skills, linkSitio, linkGithub }) => {
  return (
    <>
        <div className='contenedor-card'>
            <div>
                <a target="_blank" href={linkSitio}> <img className="img-proyecto-size" src={imagen} /></a>
            </div>
            
            <div className='contenedor-info-flex'>
                <div className='contenedor-titulo-skills'>
                    <h3>{titulo}</h3>
                    <p>{skills}</p>
                </div>
                <div className='btn-links'>
                    <div>
                        <a href={linkGithub} target="_blank"><FontAwesomeIcon className="hover-icn" icon={faGithub} size="2x" /> </a>
                    </div>
                    <div className='btn-a'>
                        <a href={linkSitio} target="_blank"><span className="btn-sitio">Ver sitio</span></a>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}


const Proyectos = () => {
  return (
    <>
        <Container id="proyectos" className='hg-pro'>
            <Row>
                <div>
                    <h2 className='title-proy'>Proyectos</h2>
                </div>
            </Row>
            <Row>
                <Col className="row-proy">
                    <Proyecto 
                        imagen={ProyectoUno}
                        titulo="Movimientos Artísticos"
                        skills="HTML - CSS- JavaScript"
                        linkSitio="https://movimientos.netlify.app/"
                        linkGithub="https://github.com/jimenabelentorrilla/BAM-C48" />
                    <Proyecto 
                        imagen={ProyectoDos}
                        titulo="Streaming Website"
                        skills="React - CSS- Bootstrap"
                        linkSitio="https://video-streaming-website.netlify.app/"
                        linkGithub="https://github.com/jimenabelentorrilla/video-website" />
                    <Proyecto 
                        imagen={ProyectoTres}
                        titulo="Gourmet Burger"
                        skills="React - CSS - Bootstrap"
                        linkSitio="https://gourmet-burger-kitchen.netlify.app/"
                        linkGithub="https://github.com/jimenabelentorrilla/burger-react" />
                </Col>
            </Row>
        </Container>
    </>  
  )
}

export default Proyectos;


