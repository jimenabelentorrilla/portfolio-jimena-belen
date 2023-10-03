import './Nav.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from "../../assets/Menu.png";

const Naav = () => {
  return (
    <>
        <Container>
            <Row className="row-nav">
                <Col sm={2} md={4}>
                    <div>
                        <span className="logo">JBT.</span>
                    </div>
                </Col>
                <Col sm={10} md={8} className="flex-nav">
                    <div>
                        <img className="menu" src={Menu}/>
                    </div>
                    <div>
                        <ul className='nav-ul'>
                            <a href="#proyectos"><li>Proyectos</li></a>
                            <a href="#about"><li>Sobre mi</li></a>
                            <a href="#contacto"><li>Contacto</li></a>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Naav;
