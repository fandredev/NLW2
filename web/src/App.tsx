import React from "react";
import Routes from "./routes";
import "./assets/styles/global.css";
import { GlobalStyle } from "./globals";
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
