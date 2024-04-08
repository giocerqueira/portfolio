import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navegacao from './components/navegacao.jsx';


const GlobalStyle = createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: 0;
    background-color: #0f172a;
    color: white;
    font-family: "Reddit Mono", monospace;
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <Navegacao/>
    </>
  )
}

export default App;