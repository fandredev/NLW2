import React from "react";
import Routes from "./routes";
import "./assets/styles/global.css";
import "react-toastify/dist/ReactToastify.css";
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
