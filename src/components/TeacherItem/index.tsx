import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

interface TeacherItemProps<S, N> {
  avatar_url: S;
  name: S;
  subject: S;
  title: S;
  description: S;
  price_hour: N;
  whatsapp: N;
}
const TeacherItem: React.FC<TeacherItemProps<string, number>> = (props) => {
  const {
    avatar_url,
    name,
    subject,
    title,
    description,
    price_hour,
    whatsapp,
  } = props;
  return (
    <article className="teacher-item">
      <header>
        <img src={`${avatar_url}`} alt={"Teacher photos".concat(name)} />
        <div>
          <strong>{`${name}`}</strong>
          <span>{`${subject}`}</span>
        </div>
      </header>
      <p>
        {title}
        <br />
        <br />
        {description}
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {price_hour}</strong>
        </p>
        <a href={`http://wa.me/${whatsapp}`}>
          <button type="button">
            <img src={whatsappIcon} alt="Entrar em contato via whatsapp" />
            Entrar em contato
          </button>
        </a>
      </footer>
    </article>
  );
};
export default TeacherItem;
