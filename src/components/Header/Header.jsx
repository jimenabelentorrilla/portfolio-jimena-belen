import './Header.css';
import 'animate.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CV from "../../assets/CV-Torrilla-Jimena-Belen.pdf";

const Header = () => {
  return (
    <>
        <Container>
            <Row className="row-header animate__animated animate__fadeIn">
                <Col>
                    <div className="text-hd">
                        <span>Frontend Developer</span>
                        <h1>Jimena Belén Torrilla</h1>
                        <a href={CV} target='blank' class="btn-des">DESCARGAR CV</a>
                    </div>
                </Col>
                <Col>
                  <div>
                      <p className="text-bio">En el cruce de la lógica y la creatividad, me desempeño como desarrolladora con experiencia en <strong>React, JavaScript, Bootstrap y CSS </strong>buscando constantemente desafíos intrigantes.</p>
                      <p className="text-bio"> Me motiva la capacidad de la tecnología para establecer conexiones significativas y enriquecer experiencias digitales.</p>
                  </div>
                </Col>
            </Row>
        </Container>
    </>  
  )
}

export default Header;