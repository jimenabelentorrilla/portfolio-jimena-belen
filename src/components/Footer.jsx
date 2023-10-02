import React, { useRef, useState  } from 'react';
import emailjs from '@emailjs/browser';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Verificar from "../assets/verificar.svg";

import Modal from 'react-bootstrap/Modal';



const Footer = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wvoajub', 'template_oiaxyzh', form.current, 'vyErkCvr_lW2IRIw7')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          setShow(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex-input">
                            <div className="input-footer">
                                <input name="user_name" type='text' placeholder='Nombre' required></input>
                            </div>
                            <div className="input-footer">
                                <input name="user_email" type="email" placeholder='Email' required ></input>
                            </div>

                            <div>
                                <textarea 
                                    name="message" 
                                    className="text-area"
                                    placeholder='Escribí tu mensaje acá'
                                    required />
                            </div>
                        </div>
                        <div>
                            <button type="submit" value="Send" className="btn-form">Enviar</button>
                        </div>
                    </form>
                </Col>              
          </Row>
        </Container>

        <Modal centered size="md" show={show} onHide={handleClose}>
            <Modal.Header closeButton> </Modal.Header>
        
            <Modal.Body>
                <div>
                    <div className='Modal-flex-img'>
                        <img src={Verificar} />
                    </div> 
                    <div className='Modal-text'>
                        <h5>¡Gracias por contactarme!</h5>
                        <p>Tu mensaje se ha enviado correctamente.</p>
                    </div>
                </div> 
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    </>  
  )
}

export default Footer;