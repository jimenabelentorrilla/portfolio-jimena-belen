import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faCss3, faJs, faBootstrap, faSass, faGit } from '@fortawesome/free-brands-svg-icons';

const Skillss = () => {
  return (
    <>
        <Container>
          <Row className="row-skills">
              <Col>
                  <div className='flex-skills'>
                    <FontAwesomeIcon icon={faReact} size="4x" style={{ color: '#2D2D2D'}} />
                    <FontAwesomeIcon icon={faCss3} size="4x" style={{ color: '#2D2D2D'}}/>
                    <FontAwesomeIcon icon={faJs} size="4x" style={{ color: '#2D2D2D'}}/> 
                    <FontAwesomeIcon icon={faBootstrap} size="4x" style={{ color: '#2D2D2D'}}/> 
                    <FontAwesomeIcon icon={faSass} size="4x" style={{ color: '#2D2D2D'}}/> 
                    <FontAwesomeIcon icon={faGit} size="4x" style={{ color: '#2D2D2D'}}/> 
                  </div>
              </Col>
          </Row>
        </Container>
    </>  
  )
}

export default Skillss;