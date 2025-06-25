import NavBar from "@/components/NavBar";
import Link from "next/link";
import myphoto from "../../public/mypicturedark.png";
import Image from "next/image";
import "./page.scss";
import {faCss3, faGithub, faHtml5, faJava, faJsSquare, faLinkedin, faPhp, faPython, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import highlightProjects from "@/components/Lists/highlight-projects";
import { faEllipsisH, faLink } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
    <div>
      <main>
        <div className="my-presentation">
          <div className="my-presentation-content">
            <div className="my-p-text">
              <h1>Gabriel Zanella</h1>
              <h2>Desenvolvedor Web</h2>
              <h3>Front-End</h3>
              <div className="my-p-links">
                <Link href="/about" className="about-me-b">Sobre Mim</Link>
                <a target="_blank" href="https://www.linkedin.com/in/gabrielzanella99/"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a target="_blank" href="https://github.com/gabriel030899"><FontAwesomeIcon icon={faGithub}/></a>
              </div>
            </div>
            <div className="my-p-picture">
              <Image src={myphoto} alt="My picture" />
            </div>
          </div>
        </div>
        <div className="my-skills-icons">
          <FontAwesomeIcon icon={faHtml5} alt="HTML" title="HTML" />
          <FontAwesomeIcon icon={faCss3} alt="CSS" title="CSS"/>
          <FontAwesomeIcon icon={faJsSquare} alt="JavaScript" title="JavaScript"/>
          <FontAwesomeIcon icon={faReact} alt="React" title="React"/>
          <FontAwesomeIcon icon={faVuejs} alt="Vue" title="Vue"/>
          <FontAwesomeIcon icon={faPhp} alt="PHP" title="PHP"/>
          <FontAwesomeIcon icon={faJava} alt="Java" title="Java"/>
          <FontAwesomeIcon icon={faPython} alt="Python" title="Python"/>
        </div>
        <div className="highlight-projects">
          <h2>Projetos Destaque</h2>
          <div className="projects-summary">
            {highlightProjects.map((project) => (
              <div key={project.id} className="project-card">
                <h3>{project.name}</h3>
                <Image src={project.image} alt={project.name} />
                <div className="project-skills">
                  {project.skills.map((skill, index) => (
                    <span key={index}>{skill.name}</span>
                  ))}
                </div>
                <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} />Ver Projeto</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />Github</a>
                <Link href={`/projects/${project.id}`}><FontAwesomeIcon icon={faEllipsisH} />Saiba Mais</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
