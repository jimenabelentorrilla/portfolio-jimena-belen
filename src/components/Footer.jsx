import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
        <Container  id="contacto" className="row-footer" >
          <Row className="gap-ftr">
                <Col>
                    <div className='card-footer'>
                        <div className="card-text">
                            <h2>Sigamos en contacto.</h2>
                            <p>Gracias por visitar mi portfolio. La colaboración y la conexión son fundamentales en este mundo digital. También podés seguirme en mis redes sociales para estar al tanto de las últimas novedades y proyectos. </p>
                        </div>
            
                        <div className="flex-icon">
                            <a href="https://www.linkedin.com/in/jimena-belen-torrilla/" target="_blank"><FontAwesomeIcon className="hover-icn fs-icon" icon={faLinkedin} /></a>
                            <a href="https://github.com/jimenabelentorrilla" target="_blank"><FontAwesomeIcon icon={faGithub} className="hover-icn fs-icon" /></a>
                        </div>
                    </div>
                </Col>
                <Col>
                    <form>
                        <div className="flex-input">
                            <div className="input-footer">
                                <input  type='text' placeholder='Nombre'></input>
                            </div>
                            <div className="input-footer">
                                <input type="email" placeholder='Email'></input>
                            </div>

                            <div>
                                <textarea 
                                    name="textarea" 
                                    className="text-area"
                                    placeholder='Escribí tu mensaje acá' />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="btn-form">Enviar</button>
                        </div>
                    </form>
                </Col>              
          </Row>
        </Container>
    </>  
  )
}

export default Footer;