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
                    <FontAwesomeIcon className="animate__animated animate__fadeInLeft animate__delay-0.5" icon={faReact} size="4x" style={{ color: '#2F2E41'}} />
                    <FontAwesomeIcon className="animate__animated animate__fadeInLeft animate__delay-1s" icon={faCss3} size="4x" style={{ color: '#2F2E41'}}/>
                    <FontAwesomeIcon className="animate__animated animate__fadeInLeft animate__delay-2s" icon={faJs} size="4x" style={{ color: '#2F2E41'}}/> 
                    <FontAwesomeIcon className="animate__animated animate__fadeInLeft animate__delay-3s" icon={faBootstrap} size="4x" style={{ color: '#2F2E41'}}/> 
                    <FontAwesomeIcon className="animate__animated animate__fadeInLeft animate__delay-4s" icon={faSass} size="4x" style={{ color: '#2F2E41'}}/> 
                    <FontAwesomeIcon className="animate__animated animate__fadeInLeft animate__delay-5s" icon={faGit} size="4x" style={{ color: '#2F2E41'}}/> 
                  </div>
              </Col>
          </Row>
        </Container>
    </>  
  )
}

export default Skills;