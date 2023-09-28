import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Undraw from "../assets/undraw.svg";

const Header = () => {
  return (
    <>
        <Container>
          <Row className="row-header">
              <Col>
                  <div className="text-hd">
                    <span>Frontend Developer</span>
                    <h1>Jimena Belén Torrilla</h1>
                    <a class="btn-des">DESCARGAR CV</a>
                  </div>
              </Col>
              <Col>
                <img className="img-hd" src={Undraw}/> 
              </Col>
          </Row>
        </Container>
    </>  
  )
}

export default Header;