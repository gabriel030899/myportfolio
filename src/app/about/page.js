"use client";
import './page.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import myphoto from "../../../public/mypicturedark.png";
import Image from 'next/image';
import { useLanguage } from "@/components/LanguageContext";

const About = () => {
    const { t } = useLanguage();

    return (
        <div className="about-page">
            <div className="text-zone">
                <h1>{t("about.title")}</h1>
                <div className="text-description">
                    <div className="content-container">
                        <div className="content-container-text">
                            <p>
                            {t("about.bio")}
                            </p>
                            <p>
                            {t("about.expertise")}
                            </p>
                        </div>
                        <Image src={myphoto} alt="Foto de perfil" />
                    </div>
                    <h2>{t("about.skillsTitle")}</h2>
                    <ul>
                        {t("about.skills").map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;