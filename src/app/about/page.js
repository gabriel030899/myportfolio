import './page.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import myphoto from "../../../public/mypicturedark.png";
import Image from 'next/image';


const About = () => {
    return (
        <div className="about-page">
            <div className="text-zone">
                <h1>Sobre Mim</h1>
                <div className="text-description">
                    <div className="content-container">
                        <div className="content-container-text">
                            <p>
                            Sou <b>Analista de Dados</b> e <b>Desenvolvedor Web Full Stack</b>, atualmente trabalhando como Analista de Dados Pleno na NBS Latam, onde desenvolvo aplicações e softwares utilizando a Power Platform da Microsoft (<b>Power BI</b>, <b>Power Apps</b> e <b>Power Automate</b>), otimizando processos e melhorando a eficiência operacional. Trabalho diretamente com clientes e stakeholders para definir requisitos, modelar fluxos de processos e desenvolver mockups, aplicando metodologias ágeis como <b>SCRUM</b>.
                            </p>
                            <p>
                            Minha expertise vai além da Power Platform. Possuo conhecimento sólido em desenvolvimento web, com proficiência em <b>HTML</b>, <b>CSS</b>, <b>Javascript</b>, <b>React.js</b>, <b>Typescript</b>, <b>Next.js</b>, <b>PHP</b> e <b>Python</b>.
                            </p>
                        </div>
                        <Image src={myphoto} alt="Foto de perfil" />
                    </div>
                    <h2>Habilidades & Experiência</h2>
                    <ul>
                        <li>HTML - CSS - JavaScript - React.js - React Native - TypeScript - Angular - Next.js</li>
                        <li>Python - SQL - Azure - Node.js - PHP</li>
                        <li>Power BI - Power Apps - Power Automate</li>
                        <li>Análise de Dados - Automação de Processos</li>
                        <li>UX/UI - Prototipagem  - Modelagem de Processos</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;