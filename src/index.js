import React from 'react';
import ReactDOM from 'react-dom';
// Importando componentes da interface.
import App from './main/App';
// Importando dependências de template.
import "./commom/template/dependencies.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
