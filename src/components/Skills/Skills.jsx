import './Skills.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Marquee from "react-fast-marquee";

import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaSquareGit } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAstro } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";


  const icons = [
    { icon: SiNextdotjs, label: 'Next.js' },
    { icon: FaReact, label: 'React.js' },
    { icon: SiTypescript, label: 'TypeScript' },
    { icon: FaHtml5, label: 'HTML5'},
    { icon: RiTailwindCssFill, label: 'Tailwind CSS' },
    { icon: FaSquareGit, label: 'Git' },
    { icon: BiLogoPostgresql , label: 'Postgresql' },
    { icon: SiAstro, label: 'Astro' },
    { icon: FaCss3Alt, label: 'CSS3' },
    { icon: SiVite, label: 'Vite' },
  ];


const Skills = () => {
  return (
    <>
        <Container id="skills">
          <Row className="row-skills d-flex align-items-center">
              <Col>
                <Marquee
                  pauseOnHover={true}
                  speed={60}
                  gradient={false}>
                      {icons.map(({ icon: IconComponent, label }, index) => (
                        <div
                          key={index}
                          className="d-flex flex-column align-items-center gap-3 mx-5 skills-items">
                          <IconComponent size={60} color="#2F2E41" className="skill" />
                          <p className="icon-name">{label}</p>
                        </div>
                      ))}
                </Marquee>
              </Col>
          </Row>
        </Container>
    </>  
  )
}

export default Skills;