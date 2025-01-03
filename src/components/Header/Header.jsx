import './Header.css';
import 'animate.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  return (
    <>
        <Container>
            <Row className="row-header d-flex align-content-center justify-content-center animate__animated animate__fadeIn">
                <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
                    <div className="text-hd d-flex flex-column align-items-start">
                        <span>Frontend Developer</span>
                        <h1>Jimena Belén Torrilla</h1>
                        <a href="https://drive.google.com/file/d/1fgvq-p-P_krb4Vx7OxifKWFydzvUdS8t/view" target='blank' class="btn-des">DESCARGAR CV</a>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
                  <div className="d-flex flex-column justify-content-end">
                      <p className="text-bio">En el cruce de la lógica y la creatividad, me desempeño como desarrolladora buscando constantemente <b>desafíos intrigantes.</b></p>
                      <p className="text-bio"> Me motiva la capacidad de la <b>tecnología</b> para establecer conexiones significativas y enriquecer experiencias digitales.</p>
                  </div>
                </Col>
            </Row>
        </Container>
    </>  
  )
}

export default Header;