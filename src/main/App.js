import React from "react";
// Importando estilo.
import "./App.css";
// Importando componentes da interface.
import Header from "../Componente/Header/Header.js";
import SideBar from "../Componente/SideBar/SideBar.js";

const App = () => {
  const [isMenuAberto, setIsMenuAberto] = React.useState(true);

  return (
    <div className="App">
      <Header isAberto={isMenuAberto} setIsAberto={setIsMenuAberto} />
      <SideBar isAberto={isMenuAberto} setIsAberto={setIsMenuAberto} />
    </div>
  );
};

export default App;
