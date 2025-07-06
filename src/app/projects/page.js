"use client";
import highlightProjects from "@/components/Lists/highlight-projects";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEllipsisH, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import './page.scss'
import { useLanguage } from "@/components/LanguageContext";

const Projects = () => {
    const { t } = useLanguage();

    return (
        <div className="projects-page">
            <h1>{t("projects.title")}</h1>
            <div className="my-projects">
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
                        <a href={project.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} />{t("projects.viewProject")}</a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />{t("projects.github")}</a>
                        <Link href={`/projects/${project.id}`}><FontAwesomeIcon icon={faEllipsisH} />{t("projects.learnMore")}</Link>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default Projects;