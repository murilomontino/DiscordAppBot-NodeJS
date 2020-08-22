/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./styles.css";



function Login() {
  return (
    <div class="main-container">
      <section className="left-container">
        <div className="title-container">
          <h1>
            {" "}
            <strong>Cthulhu</strong> bot
          </h1>
          <p className="sub-title">Gerencie seu bot de RPG no Discord.</p>
        </div>

        <div className="button-container">
          <p>Ainda não tem um bot?</p>
          <a href="/">Criar bot</a>
        </div>
      </section>

      <section className="right-container">
        <div className="input-container">
          <p>Entre com seu Token:</p>
          <input type="text" name="name" />
          <button>Entrar</button>
        </div>
      </section>
    </div>
  );
}

export default Login;
