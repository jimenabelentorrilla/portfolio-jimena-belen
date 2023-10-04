import './Nav.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from "../../assets/Menu.png";
import Offcanvas from 'react-bootstrap/Offcanvas';


const Naav = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Container>
            <Row className="row-nav">
                <Col xs={6} sm={2} md={4}>
                    <div>
                        <span className="logo">JBT.</span>
                    </div>
                </Col>
                <Col xs={6} sm={10} md={8} className="flex-nav">
                    <div>
                        <img onClick={handleShow} className="menu" src={Menu}/>
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

    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton><Offcanvas.Title></Offcanvas.Title></Offcanvas.Header>
        <Offcanvas.Body>
            <div>
                <ul className='nav-hm'>
                    <a href="#proyectos"><li>Proyectos</li></a>
                    <a href="#about"><li>Sobre mi</li></a>
                    <a href="#contacto"><li>Contacto</li></a>
                </ul>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Naav;
