import React from 'react';
import ReactDOM from 'react-dom';
// Importando componentes da interface.
import App from './main/App';
// Importado bibliotecas de estilo.
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
