import styled from "styled-components";
import { Colors, Fonts } from "../../constants";
import { Link } from "react-router-dom";

export const WrapperLanding = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.ColorTitleInPrimary};
  background: ${Colors.ColorPrimary};
`;
export const WrapperLandingContent = styled.div`
  @media (min-width: 1100px) {
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "logo hero hero"
      "buttons total total";
  }
`;
export const WrapperImage = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  & h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;

    & h2 {
      text-align: initial;
      font-size: 3.6rem;
    }
  }
`;
export const Image = styled.img`
  height: 10rem;
  @media (min-width: 1100px) {
    height: 100%;
  }
`;
export const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
  }
`;

export const SpanTotalConnections = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
  }
`;
export const ImageTotalConnections = styled.img`
  margin-left: 0.8rem;
`;

// Link

export const StyledLink = styled(Link)`
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  font: 700 2rem ${Fonts.Primary};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${Colors.ColorButtonText};
  transition: background-color 0.2s;

  & a {
    width: 4rem;
  }
  &:first-child {
    margin-right: 1.6rem;
    background: ${Colors.ColorPrimaryLighter};
  }
  &:first-child:hover {
    background: ${Colors.ColorPrimaryLight};
  }
  &:last-child {
    background: ${Colors.ColorSecondary};
  }
  &:last-child:hover {
    background: ${Colors.ColorSecondaryDark};
  }
  & img {
    margin-right: 2.4rem;
  }
`;
export const HeroImage = styled.img`
  width: 100%;

  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
  }
`;
