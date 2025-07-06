"use client";

import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faJsSquare,
    faReact,
    faAngular,
    faPython,
    faPhp,
    faHtml5,
    faCss3,
    faDocker,
    faGithub,
    faLinkedin,
    faWhatsappSquare
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./page.scss";
import { useLanguage } from "@/components/LanguageContext";

const iconsList = [
    { icon: faJsSquare, name: "JavaScript" },
    { icon: faReact, name: "React" },
    { icon: faAngular, name: "Angular" },
    { icon: faPython, name: "Python" },
    { icon: faPhp, name: "PHP" },
    { icon: faHtml5, name: "HTML" },
    { icon: faCss3, name: "CSS" },
    { icon: faDocker, name: "Docker" },
];

// Função para calcular distância entre dois pontos (em %)
function distance(pos1, pos2) {
  const dx = pos1.left - pos2.left;
  const dy = pos1.top - pos2.top;
  return Math.sqrt(dx * dx + dy * dy);
}

// Gera posições aleatórias sem sobreposição
function generateNonOverlappingPositions(count, minDistance = 10) {
  const positions = [];

  for (let i = 0; i < count; i++) {
    let tries = 0;
    let pos;
    do {
      pos = {
        top: Math.random() * 80 + 10, // 10% a 90% vertical
        left: Math.random() * 45 + 50, // 50% a 95% horizontal (mais para centro)
      };
      tries++;
      // Verifica distância mínima para todos os anteriores
    } while (
      positions.some((p) => distance(p, pos) < minDistance) &&
      tries < 100
    );
    positions.push(pos);
  }

  return positions;
}

export default function Contact() {
    const [positions, setPositions] = useState([]);
    const timeoutRef = useRef(null);
    const { t } = useLanguage();

    useEffect(() => {
      function updatePositions() {
        const newPositions = generateNonOverlappingPositions(iconsList.length, 12);
        setPositions(newPositions);
        // Agenda a próxima atualização após 5s (duração da animação)
        timeoutRef.current = setTimeout(updatePositions, 5000);
      }

      updatePositions();

      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, []);

    return (
      <div className="contact-page">
        <div className="contact-left">
          <h1>{t("contact.title")}</h1>
          <p>
            {t("contact.description")}
          </p>
          <p>
            {t("contact.contactInfo")}
          </p>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/gabrielzanella99/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a
              href="https://github.com/gabriel030899"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a
              href="https://wa.me/5519999009796"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsappSquare} /> (19) 9 9900-9796
            </a>
            <a href="mailto:gabriel030899@gmail.com" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} /> Gmail
            </a>
          </div>
        </div>
        <div className="contact-right">
          {iconsList.map((item, index) => (
            <FontAwesomeIcon
              key={item.name}
              icon={item.icon}
              title={item.name}
              className="tech-icon"
              style={{
                top: `${positions[index]?.top || 50}%`,
                left: `${positions[index]?.left || 80}%`,
                animationDelay: `${index * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
}