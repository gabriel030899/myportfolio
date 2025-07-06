import React from "react";
import "./BigNumbers.scss";

const BigNumbers = () => {

  return (
    <section className="big-numbers-section">
      <div className="big-number">
        <span className="number">30+</span>
        <span className="label">+30 projetos entregues</span>
      </div>
      <div className="big-number">
        <span className="number">4+</span>
        <span className="label">+4 anos de experiência</span>
      </div>
      <div className="big-number">
        <span className="number">100%</span>
        <span className="label">100% ciclo completo do projeto</span>
      </div>
    </section>
  );
};

export default BigNumbers;
