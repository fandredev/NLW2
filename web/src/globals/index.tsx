import { createGlobalStyle } from 'styled-components';
import { Colors, Fonts, MediaQuerys } from '../constants';

export const GlobalStyle = createGlobalStyle`
body,
input,
button,
textarea {
  font: 500 1.6rem ${Fonts.Secondary};
  color: ${Colors.ColorTextBase};
}
.container {
  width: 90vw;
  max-width: ${MediaQuerys.Padronization_Web};
}
@media (min-width: ${MediaQuerys.Padronization_Web}) {
  :root {
    font-size: ${Fonts.Padronization_Web};
  }
}
:root {
  font-size: 60%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#root {
  height: 100vh;
}
body {
  background: ${Colors.ColorBackground};
}
#root {
  display: flex;
  align-items: center;
  justify-content: center;
}
`;
