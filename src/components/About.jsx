import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from "../assets/profile.jpg";


const About = () => {
  return (
    <>
        <Container fluid id="about" className="row-about" >
          <Row>
                <Col>
                    <div className='flex-abt'>
                        <div className='card-about'>
                        <div>
                            <img className="img-about" src={Profile} />
                        </div>
                        <div className='text-abt'>
                            <p>Jimena Belén Torrilla</p>
                            <span>Frontend Developer</span>
                        </div>
                    </div>

                    <div>
                        <p className="text-bio">En el cruce de la lógica y la creatividad, me desempeño como desarrolladora con experiencia en <strong>React, JavaScript, Bootstrap y CSS </strong>buscando constantemente desafíos intrigantes y la elaboración de un diseño elegante. Me motiva la capacidad de la tecnología para establecer conexiones significativas y enriquecer experiencias digitales.</p>
                    </div>
                    </div>
                </Col>               
          </Row>
        </Container>
    </>  
  )
}

export default About;