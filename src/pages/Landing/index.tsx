import React, { useState, useEffect } from "react";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import {
  WrapperLanding,
  WrapperLandingContent,
  WrapperImage,
  Image,
  WrapperButtons,
  SpanTotalConnections,
  ImageTotalConnections,
  StyledLink,
  HeroImage,
} from "./styles";

import api from "../../services/api";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((res) => {
      const { total } = res.data;
      setTotalConnections(total);
    });
  }, [totalConnections]);

  return (
    <WrapperLanding>
      <WrapperLandingContent>
        <WrapperImage>
          <Image src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </WrapperImage>

        <HeroImage
          src={landingImg}
          alt="Plataforma de Estudos"
          className="hero-image"
        />

        <WrapperButtons>
          <StyledLink to="study" className="study">
            <img src={studyIcon} alt="Study Icon" />
            Estudar
          </StyledLink>

          <StyledLink to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Give classes Icon" />
            Dar aulas
          </StyledLink>
        </WrapperButtons>

        <SpanTotalConnections>
          Total de {totalConnections} conexões já realizadas
          <ImageTotalConnections src={purpleHeartIcon} alt="Coração roxo" />
        </SpanTotalConnections>
      </WrapperLandingContent>
    </WrapperLanding>
  );
}

export default Landing;
