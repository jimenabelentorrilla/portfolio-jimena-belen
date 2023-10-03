import './Skills.css';
import 'animate.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faCss3, faJs, faBootstrap, faSass, faGit } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <>
        <Container>
          <Row className="row-skills">
              <Col>
                  <div className='flex-skills'>
                    <FontAwesomeIcon className="animate__animated animate__fadeInLeft animate__delay-0.5 skill" icon={faReact} style={{ color: '#2F2E41'}} />
                    <FontAwesomeIcon className="animate__animated animate__fadeInLeft animate__delay-1s skill" icon={faCss3} style={{ color: '#2F2E41'}}/>
                    <FontAwesomeIcon className="animate__animated animate__fadeInLeft animate__delay-2s skill" icon={faJs} style={{ color: '#2F2E41'}}/> 
                    <FontAwesomeIcon className="animate__animated animate__fadeInLeft animate__delay-3s skill" icon={faBootstrap} style={{ color: '#2F2E41'}}/> 
                    <FontAwesomeIcon className="animate__animated animate__fadeInLeft animate__delay-4s skill" icon={faSass} style={{ color: '#2F2E41'}}/> 
                    <FontAwesomeIcon className="animate__animated animate__fadeInLeft animate__delay-5s skill" icon={faGit} style={{ color: '#2F2E41'}}/> 
                  </div>
              </Col>
          </Row>
        </Container>
    </>  
  )
}

export default Skills;