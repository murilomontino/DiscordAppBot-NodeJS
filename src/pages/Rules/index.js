import React from "react";
import RulesCard from "./components/rules_card.js";
import "./styles.css";

function Rules() {
  return (
    <div className="rules">
      <div className="rules-title">
        <h3> Livro de regras: </h3>
      </div>
      <div className="cards-container">
        <RulesCard /> <RulesCard /> <RulesCard /> 
      </div>
    </div>
  );
}

export default Rules;
