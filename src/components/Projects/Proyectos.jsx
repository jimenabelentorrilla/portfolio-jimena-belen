import './Projects.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/**assets**/
import ProyectoUno from "../../assets/mov.jpg";
import ProyectoDos from "../../assets/domo.png";
import ProyectoTres from "../../assets/homy.jpg";


export const Proyecto = ({ imagen, titulo, skills, linkSitio, linkGithub }) => {
  return (
    <>
        <div className='d-flex flex-column gap-3'>
            <div className="cnt-imagen">
                <a target="_blank" href={linkSitio}> <img className="img-proyecto-size" src={imagen} /></a>
            </div>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='contenedor-titulo-skills d-flex flex-column align-items-start gap-1'>
                    <h3>{titulo}</h3>
                    <p>{skills}</p>
                </div>
                <div className='d-flex gap-2 justify-content-between align-items-center'>
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

const cards = [
    {
      imagen: ProyectoUno,
      titulo:"Movimientos Artísticos",
      skills:"HTML - CSS- JavaScript",
      linkSitio:"https://movimientos.netlify.app/",
      linkGithub:"https://github.com/jimenabelentorrilla/BAM-C48" 
    },
    {
        imagen: ProyectoDos,
        titulo: "DOMO",
        skills:"React.js - CSS - Bootstrap",
        linkSitio:"https://challenge-torrilla.netlify.app/",
        linkGithub:"https://github.com/jimenabelentorrilla/landing-challenge"
    },
    {
        imagen: ProyectoTres,
        titulo: "Homy",
        skills:"React.js - CSS - MUI",
        linkSitio:"https://homy-app.netlify.app/",
        linkGithub:"https://github.com/jimenabelentorrilla/homy"
    }
  ];

const Proyectos = () => {
  return (
    <>
        <Container id="proyectos" className="hg-pro d-flex align-items-center gap-3 justify-content-center">
            <Row className="d-flex flex-column gap-4">
                <Col>
                    <div>
                        <h2 className='title-proy'>Proyectos</h2>
                    </div>
                </Col>
                <Col className="row-proy d-flex justify-content-between align-items-center gap-4">
                    {
                        cards.map(card => {
                            return (
                                <Proyecto 
                                    imagen={card.imagen}
                                    titulo={card.titulo}
                                    skills={card.skills}
                                    linkSitio={card.linkSitio}
                                    linkGithub={card.linkGithub} />
                            )
                        })
                    }                    
                </Col>
            </Row>
        </Container>
    </>  
  )
}

export default Proyectos;
