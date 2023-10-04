import './Header.css';
import 'animate.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Undraw from "../../assets/undraw.svg";
import TrackVisibility from 'react-on-screen';
import CV from "../../assets/CV-Torrilla-Jimena-Belen.pdf";

const Header = () => {
  return (
    <>
        <Container>
          <TrackVisibility>
            {({isVisible}) =>
            <Row className={`row-header ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                <Col xs={12}>
                    <div className="text-hd">
                        <span>Frontend Developer</span>
                        <h1>Jimena Belén Torrilla</h1>
                        <a href={CV} target='blank' class="btn-des">DESCARGAR CV</a>
                    </div>
                </Col>
                <Col>
                  <div>
                    <img className="img-hd" src={Undraw}/>
                  </div>
                </Col>
            </Row> }
          </TrackVisibility>
        </Container>
    </>  
  )
}

export default Header;