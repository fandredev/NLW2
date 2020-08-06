import styled from "styled-components";
import { Colors, Fonts } from "../../constants";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100vw;

    &.page-header .header-content {
      margin-bottom: 0;
    }
  }
  & #page-header .header-content {
    margin-bottom: 6.4rem;
  }
`;
export const Main = styled.main`
  background: ${Colors.ColorBoxBase};
  width: 100%;
  max-width: 74rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;
  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;

    & .schedule-item .input-block {
      margin-top: 0 !important;
    }
  }
`;
export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;

  & + & {
    margin-top: 6.4rem;
  }
  & .input-block + .textarea-block,
  & .select-block + .input-block {
    margin-top: 2.4rem;
  }
  @media (min-width: 700px) {
    padding: 0 6.4rem;
  }
`;
export const ScheduleItem = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;
    & .input-block {
      margin-top: 0 !important;
    }
  }
`;
export const Legend = styled.legend`
  font: 700 2.4rem ${Fonts.Primary};
  color: ${Colors.ColorTextTitle};
  margin-bottom: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid ${Colors.ColorLineInWhite};
`;
export const ButtonNewHour = styled.button`
  background: none;
  border: 0;
  color: ${Colors.ColorPrimary};
  cursor: pointer;
  font: 700 1.6rem ${Fonts.Primary};
  transition: color 0.2s;

  &:hover {
    color: ${Colors.ColorPrimaryDark};
  }
`;
export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  background: ${Colors.ColorBoxFooter};
  border-top: 1px solid ${Colors.ColorLineInWhite};
  margin-top: 6.4rem;

  @media (min-width: 700px) {
    padding: 4rem 6.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const FooterParagraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${Colors.ColorTextComplement};

  @media (min-width: 700px) {
    justify-content: space-between;
  }
`;
export const FooterImage = styled.img`
  margin-right: 2rem;
`;
export const FooterButton = styled.button`
  width: 100%;
  height: 5.6rem;
  background: ${Colors.ColorSecondary};
  color: ${Colors.ColorButtonText};
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.6rem ${Fonts.Primary};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
  margin-top: 3.2rem;
  @media (min-width: 700px) {
    width: 20rem;
    margin-top: 0;
  }
  &:hover {
    background: ${Colors.ColorSecondary};
  }
`;
