import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/50245199?s=460&u=891a98f4de4c3983d03a3e4ce3052c6fe248f958&v=4"
          alt="Vitor Lourenço"
        />
        <div>
          <strong>Vitor Lourenço</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de Química avançada
        <br />
        <br />
        Apaixonado por explodir coisas de laboratório e por mudar a vida das
        pessoas atráves de experiencias.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Entrar em contato via whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};
export default TeacherItem;
