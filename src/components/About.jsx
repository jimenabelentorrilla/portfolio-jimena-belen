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
                        <p className="text-bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non provident neque molestiae expedita atque, autem, ipsa soluta, vitae sed magnam. Incidunt dolorum veritatis ea doloremque, ducimus optio esse officia!</p>
                    </div>
                    </div>
                </Col>               
          </Row>
        </Container>
    </>  
  )
}

export default About;