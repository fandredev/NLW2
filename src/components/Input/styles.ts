import styled from "styled-components";
import { Colors, Fonts } from "../../constants";

export const WrapperInput = styled.div`
  position: relative;

  /* Refere-se ao WrapperInput filhas que seria a div do jsx */
  /* & + & {
    margin-top: 1.4rem;
  } */
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
export const Label = styled.label`
  font-size: 1.4rem;
`;
export const InputStyled = styled.input`
  width: 100%;
  height: 5.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: ${Colors.ColorInputBackground};
  border: 1px solid ${Colors.ColorLineInWhite};
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem ${Fonts.Primary};
`;
