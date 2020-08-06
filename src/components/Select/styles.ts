import styled from "styled-components";
import { Colors, Fonts } from "../../constants";

export const Wrapper = styled.div`
  position: relative;

  /* & + & {
    margin-top: 1.4rem;
  } */
`;
export const Label = styled.label`
  font-size: 1.4rem;
  color: ${Colors.ColorInputBackground};
`;
export const SelectStyled = styled.select`
  width: 100%;
  height: 5.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: ${Colors.ColorInputBackground};
  border: ${Colors.ColorLineInWhite};
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem ${Fonts.Primary};

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: "";
    position: absolute;
    background: ${Colors.ColorPrimaryLight};
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`;
