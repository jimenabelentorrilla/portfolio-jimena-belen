import './Skills.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faCss3, faJs, faBootstrap, faSass, faGit } from '@fortawesome/free-brands-svg-icons';

const icons = [
  {
      "id": "1",
      "name": "React.js",
      "icon": faReact
  },
  {
      "id": "2",
      "name": "CSS3",
      "icon": faCss3 
  },
  {
      "id": "3",
      "name": "JavaScript",
      "icon": faJs    
  },
  {
      "id": "4",
      "name": "Bootstrap",
      "icon": faBootstrap
  },
  {
      "id": "5",
      "name": "Sass",
      "icon": faSass
  },
  {
      "id": "6",
      "name": "Git",
      "icon": faGit
  }
]

const Skills = () => {
  return (
    <>
        <Container id="skills">
          <Row className="row-skills d-flex align-items-center">
              <Col>
                  <div className='d-flex justify-content-between flex-wrap gap-3 align-items-center'>
                    {
                      icons.map(icon => {
                        return (
                          <div className="d-flex flex-column align-items-center gap-3">
                            <div>
                              <FontAwesomeIcon
                                key={icon.id} 
                                className='skill'
                                style={{ color: '#2F2E41'}}
                                icon={icon.icon}
                              />
                            </div>
                            <div>
                              <p className='icon-name'>{icon.name}</p>
                            </div>
                          </div>
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