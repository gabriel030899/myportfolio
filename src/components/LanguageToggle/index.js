"use client";
import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import ClientOnly from "@/components/ClientOnly";
import "./index.scss";

const LanguageToggle = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <ClientOnly
      fallback={
        <div className="language-toggle">
          <button className="lang-btn active">PT</button>
          <button className="lang-btn">EN</button>
        </div>
      }
    >
      <div className="language-toggle">
        <button
          className={`lang-btn${currentLanguage === "pt" ? " active" : ""}`}
          onClick={() => changeLanguage("pt")}
        >
          PT
        </button>
        <button
          className={`lang-btn${currentLanguage === "en" ? " active" : ""}`}
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
      </div>
    </ClientOnly>
  );
};

export default LanguageToggle;
