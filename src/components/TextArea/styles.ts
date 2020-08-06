import styled from "styled-components";
import { Fonts, Colors } from "../../constants";
export const Wrapper = styled.div`
  position: relative;

  & + & {
    margin-top: 1.4rem;
  }
`;
export const Label = styled.label`
  font-size: 1.4rem;
`;
export const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 16rem;
  min-height: 8rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: ${Colors.ColorInputBackground};
  border: 1px solid ${Colors.ColorLineInWhite};
  outline: 0;
  padding: 1.2rem 1.6rem;
  resize: vertical;
  font: 1.6rem ${Fonts.Primary};
`;
