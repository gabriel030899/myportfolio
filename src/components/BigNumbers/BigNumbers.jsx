"use client";
import React from "react";
import "./BigNumbers.scss";
import { useLanguage } from "@/components/LanguageContext";

const BigNumbers = () => {
  const { t } = useLanguage();

  return (
    <section className="big-numbers-section">
      <div className="big-number">
        <span className="number">30+</span>
        <span className="label">{t("bignumbers.projects")}</span>
      </div>
      <div className="big-number">
        <span className="number">4+</span>
        <span className="label">{t("bignumbers.years")}</span>
      </div>
      <div className="big-number">
        <span className="number">100%</span>
        <span className="label">{t("bignumbers.fullcycle")}</span>
      </div>
    </section>
  );
};

export default BigNumbers;
