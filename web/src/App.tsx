import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/global.css';
import { GlobalStyle } from './globals';
import Routes from './routes';
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
