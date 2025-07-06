"use client";
import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "@/components/LanguageToggle";
import logoblue from "../../../public/logoblue.png";
import './index.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "@/components/LanguageContext";

const NavBar = () => {
    const { t } = useLanguage();

    return (
        <div className={"navbar-container"}>
        <nav className={"navbar"}>
            <div className={"navbar-logo"}>
                <Link href="/">
                   <Image className={"logo-img"} src={logoblue} alt="Logo"/>
                   <span>Gabriel Zanella</span>
                </Link>
            </div>
            <div className={"navbar-links"}>
                <Link href="/projects">{t("header.projects")}</Link>
                <Link href="/about">{t("header.about")}</Link>
                <Link href="/contact">{t("header.contact")}</Link>
            </div>
            <div className={"navbar-menu"}>
                <div className="links-icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabrielzanella99/"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/gabriel030899"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
                <div className="navbar-menu-separator">
                    <div></div>
                </div>
                <LanguageToggle />
            </div>
        </nav>
        </div>
    );
}

export default NavBar;