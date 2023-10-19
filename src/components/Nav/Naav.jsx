import './Nav.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


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
                    <div className="menu">
                        <FontAwesomeIcon onClick={handleShow} size="2x" icon={faBars} style={{ color: '#2F2E41'}} />
                    </div>
                    <div>
                        <ul className='nav-ul'>
                            <a href="#proyectos"><li>Proyectos</li></a>
                            <a href="#skills"><li>Skills</li></a>
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
                    <a onClick={handleClose} href="#proyectos"><li>Proyectos</li></a>
                    <a onClick={handleClose} href="#about"><li>Sobre mi</li></a>
                    <a onClick={handleClose} href="#contacto"><li>Contacto</li></a>
                </ul>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Naav;
