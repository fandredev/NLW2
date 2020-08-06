import styled from "styled-components";

import { Colors, Fonts } from "../../constants";

export const TeacherItemStyled = styled.article`
  background: ${Colors.ColorBoxBase};
  border: 1px solid ${Colors.ColorLineInWhite};
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;

  & > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;

    @media (min-width: 700px) {
      padding: 0 3.2rem;
    }
  }
`;
export const Header = styled.header`
  padding: 3.2rem 2rem;
  display: flex;
  align-items: center;

  @media (min-width: 700px) {
    padding: 3.2rem;
  }
`;
export const Image = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`;
export const WrapperHeader = styled.div`
  margin-left: 2.4rem;
`;
export const StrongHeader = styled.strong`
  font: 700 2.4rem ${Fonts.Primary};
  display: block;
  color: ${Colors.ColorTextTitle};
`;
export const Footer = styled.footer`
  padding: 3.3rem 2rem;
  background: ${Colors.ColorBoxFooter};
  border-top: 1px solid ${Colors.ColorLineInWhite};
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 700px) {
    padding: 3.2rem;
  }
`;
export const StrongFooter = styled.strong`
  color: ${Colors.ColorPrimary};
  font-size: 1.6rem;
  display: block;

  @media (min-width: 700px) {
    display: initial;
    margin-left: 1.6rem;
  }
`;
export const ButtonWhatsapp = styled.button`
  width: 20rem;
  height: 5.6rem;
  background: ${Colors.ColorSecondary};
  color: ${Colors.ColorButtonText};
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.4rem ${Fonts.Primary};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.2s;

  &:hover {
    background: ${Colors.ColorSecondaryDark};
  }

  @media (min-width: 700px) {
    width: 24.5rem;
    font-size: 1.6rem;
    justify-items: center;
    text-decoration: none;
  }
`;
export const SpanSubject = styled.span`
  font-size: 1.6rem;
  display: block;
  margin-top: 0.4rem;
`;

export const LinkOpenWhatsapp = styled.a`
  @media (min-width: 700px) {
    text-decoration: none;
    border: 0px;
  }
`;
export const IconWhatsapp = styled.img`
  @media (min-width: 700px) {
    margin-right: 0rem;
  }
`;
