import React from "react";
// Importando estilo.
import "./App.css";
// Importando componentes da interface.
import Header from "../Componente/Header/Header";

const App = () => {
  const [isMenuAberto, setIsMenuAberto] = React.useState(true);

  return (
    <div className="App">
      <Header isAberto={isMenuAberto} setIsAberto={setIsMenuAberto} />
    </div>
  );
};

export default App;
