import styled from "styled-components";
import { Colors, Fonts } from "../../constants";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const FormFindTeachers = styled.form`
  margin-top: 3.2rem;
`;
export const Button = styled.button`
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

  &:hover {
    background: ${Colors.ColorSecondary};
  }
`;
export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;
`;
