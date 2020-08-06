import styled from "styled-components";
import { Colors, Fonts } from "../../constants";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background: ${Colors.ColorPrimary};

  @media (min-width: 700px) {
    height: 340px;
  }
`;
export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${Colors.ColorTextInPrimary};
  padding: 1.6rem 0;

  & > img {
    height: 1.6rem;
  }
  @media (min-width: 700px) {
    max-width: 1100px;
  }
`;
export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;
  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const Strong = styled.strong`
  font: 700 3.6rem ${Fonts.Primary};
  line-height: 4.2rem;
  color: ${Colors.ColorTitleInPrimary};

  @media (min-width: 700px) {
    max-width: 350px;
  }
`;
export const Paragraph = styled.p`
  max-width: 30rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: ${Colors.ColorTitleInPrimary};
  margin-top: 2.4rem;
`;
