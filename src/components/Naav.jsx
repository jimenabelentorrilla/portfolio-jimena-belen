import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from "../assets/Menu.png";

const Naav = () => {
  return (
    <>
        <Container fluid>
            <Row className="row-nav">
                <Col>
                    <div>
                        <span className="logo">JBT</span>
                    </div>
                </Col>
                <Col className="flex-nav">
                    <div>
                        <img className="menu" src={Menu}/>
                    </div>
                    <div>
                        <ul className='nav-ul'>
                            <a href="#" target='_blank'><li>Sobre mi</li></a>
                            <a href="#" target='_blank'><li>Proyectos</li></a>
                            <a href="#" target='_blank'><li>Contacto</li></a>
                        </ul>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Naav;
