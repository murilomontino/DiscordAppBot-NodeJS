import React from "react";
import "./styles.css";

function Login() {
  return (
    <>
      <div className="left-container">

        <div className="title-container">
          <h1>
            <strong>Cthulhu</strong> bot
          </h1>
          <p className="sub-title">Gerencie seu bot de RPG no Discord.</p>
        </div>

        <div className="button-container">
          <p>Ainda não tem um bot?</p>
          <a href="/">Criar bot</a>
        </div>

      </div>

      <div className="right-container">
        <div className="icon-right"></div>
        <div className="input-container">
          <p>Entre com seu Token:</p>
          <input type="text" name="name" />
          <button>Entrar</button>
        </div>
      </div>
    </>
  );
}

export default Login;
