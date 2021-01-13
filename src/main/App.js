import React from "react";
// Importando estilo.
import "./App.css";
// Importando componentes da interface.
import Header from "../Componente/Header/Header.js";
import SideBar from "../Componente/SideBar/SideBar.js";
import Footer from "../Componente/Footer/Footer.js";

const App = () => {
  const [isMenuAberto, setIsMenuAberto] = React.useState(true);

  return (
    <div className="App">
      <Header isAberto={isMenuAberto} setIsAberto={setIsMenuAberto} />

      <main>
        <SideBar isAberto={isMenuAberto} setIsAberto={setIsMenuAberto} />

        <section className="conteudo">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default App;
