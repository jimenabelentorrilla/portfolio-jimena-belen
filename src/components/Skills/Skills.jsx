import './Skills.css';
import 'animate.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faCss3, faJs, faBootstrap, faSass, faGit } from '@fortawesome/free-brands-svg-icons';

const icons = [
  {
      "id": "1",
      "icon": faReact,
      "delay": "animate__delay-0.5"

  },
  {
      "id": "2",
      "icon": faCss3,
      "delay": "animate__delay-1s"
  },
  {
      "id": "3",
      "icon": faJs,
      "delay": "animate__delay-2s"
  },
  {
      "id": "4",
      "icon": faBootstrap,
      "delay": "animate__delay-3s"
  },
  {
      "id": "5",
      "icon": faSass,
      "delay": "animate__delay-4s"
  },
  {
      "id": "6",
      "icon": faGit,
      "delay": "animate__delay-5s"
  }
]

const Skills = () => {
  return (
    <>
        <Container>
          <Row className="row-skills">
              <Col>
                  <div className='flex-skills'>
                    {
                      icons.map(icon => {
                        return (
                          <FontAwesomeIcon
                            key={icon.id} 
                            className={`animate__animated animate__fadeInLeft skill ${icon.delay}`} 
                            style={{ color: '#2F2E41'}}
                            icon={icon.icon}
                            />
                        )})
                    }
                  </div>
              </Col>
          </Row>
        </Container>
    </>  
  )
}

export default Skills;