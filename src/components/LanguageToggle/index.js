import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  return (
    <div className="language-toggle">
      <button
        className={`lang-btn${i18n.language === "pt" ? " active" : ""}`}
        onClick={() => i18n.changeLanguage("pt")}
      >
        PT
      </button>
      <button
        className={`lang-btn${i18n.language === "en" ? " active" : ""}`}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
