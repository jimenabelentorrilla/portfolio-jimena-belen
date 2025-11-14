import './Skills.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaSquareGit } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

  const icons = [
    { icon: SiNextdotjs, label: 'Next.js' },
    { icon: FaReact, label: 'React.js' },
    { icon: SiTypescript, label: 'TypeScript' },
    { icon: RiTailwindCssFill, label: 'Tailwind' },
    { icon: FaSquareGit, label: 'Git' },
    { icon: BiLogoPostgresql , label: 'Postgresql' },
  ];


const Skills = () => {
  return (
    <>
        <Container id="skills">
          <Row className="row-skills d-flex align-items-center">
              <Col>
                  <div className='d-flex justify-content-between flex-wrap gap-3 align-items-center'>
                    {
                      icons.map(({ icon: IconComponent, label }, index) => {
                        return (
                          <div className="d-flex flex-column align-items-center gap-3" key={index}>
                            <IconComponent size={60} color="#2F2E41" className='skill' />
                            <p className='icon-name'>{label}</p>
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