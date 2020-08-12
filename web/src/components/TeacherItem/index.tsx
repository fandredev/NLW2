import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import { TeacherItemProps } from '../../interfaces';
import api from '../../services/api';
import './styles.css';




const TeacherItem: React.FC<TeacherItemProps> = ({ teacher: { avatar, bio, cost, name, subject, whatsapp, id } }) => {
  const message = 'Message%20send%20by%20Proffy%20app';
  async function createNewConnection() {
    const data = {
      user_id: id,
    };
    Object.freeze(data);
    api.post('connections', data);
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={`${avatar}`} alt={'Teacher photo: '.concat(name)} />
        <div>
          <strong>{`${name}`}</strong>
          <span>{`${subject}`}</span>
        </div>
      </header>
      <p>{bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
          href={`http://wa.me/${whatsapp}?${message}`}
        >
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
