import React from "react";
import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

import { Link } from "react-router-dom";

import {
  Header,
  TopBarContainer,
  HeaderContent,
  Strong,
  Paragraph,
} from "./styles";

import { PageHeaderProps } from "../../interfaces";

const PageHeader: React.FC<PageHeaderProps<string>> = ({
  description,
  title,
  children,
}) => {
  return (
    <Header>
      <TopBarContainer>
        <Link to="">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </TopBarContainer>
      <HeaderContent>
        <Strong>{title}</Strong>
        {description && <Paragraph>{description}</Paragraph>}
        {children} {/* Form */}
      </HeaderContent>
    </Header>
  );
};
export default PageHeader;
