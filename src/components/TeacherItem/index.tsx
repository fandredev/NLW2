import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

import {
  TeacherItemStyled,
  Header,
  Image,
  WrapperHeader,
  StrongFooter,
  StrongHeader,
  SpanSubject,
  Footer,
  LinkOpenWhatsapp,
  ButtonWhatsapp,
  IconWhatsapp,
} from "./styles";

import { TeacherItemProps } from "../../interfaces";

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const message = "Message%20send%20by%20Proffy%20app";
  const { avatar, bio, cost, name, subject, whatsapp, id } = teacher;

  async function createNewConnection() {
    const data = {
      user_id: id,
    };
    Object.freeze(data);
    await api.post("connections", data);
  }
  return (
    <TeacherItemStyled>
      <Header>
        <Image src={`${avatar}`} alt={"Teacher photo: ".concat(name)} />
        <WrapperHeader>
          <StrongHeader>{`${name}`}</StrongHeader>
          <SpanSubject>{`${subject}`}</SpanSubject>
        </WrapperHeader>
      </Header>
      <p>{bio}</p>
      <Footer>
        <p>
          Preço/hora
          <StrongFooter>R$ {cost}</StrongFooter>
        </p>
        <LinkOpenWhatsapp
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
          href={`http://wa.me/${whatsapp}?${message}`}
        >
          <ButtonWhatsapp type="button">
            <IconWhatsapp
              src={whatsappIcon}
              alt="Entrar em contato via whatsapp"
            />
            Entrar em contato
          </ButtonWhatsapp>
        </LinkOpenWhatsapp>
      </Footer>
    </TeacherItemStyled>
  );
};
export default TeacherItem;
