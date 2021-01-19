import React from "react";
// Importando estilo.
import "./App.css";
// Importando componentes da interface.
import Header from "../Componente/Header/Header.js";
import SideBar from "../Componente/SideBar/SideBar.js";
import Footer from "../Componente/Footer/Footer.js";
import Feedback from "../Componente/Util/Feedbacks/Feedback.js";
// Importando componente com as Rotas do site.
import Rotas from "./Rotas.js";
// Importando componentes do react-router-dom.
import { BrowserRouter } from "react-router-dom";
import useMedia from "../Hooks/useMedia";

const App = () => {
  const mobile = useMedia("(max-width: 800px)");
  const [isMenuAberto, setIsMenuAberto] = React.useState(null);

  React.useEffect(() => {
    setIsMenuAberto(() => !mobile);
  }, [mobile]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header isAberto={isMenuAberto} setIsAberto={setIsMenuAberto} />

        <main>
          <SideBar isAberto={isMenuAberto} setIsAberto={setIsMenuAberto} />

          <div className="conteudo">
            <Rotas />

            <Footer />
          </div>
        </main>
  
        <Feedback />
      </div>
    </BrowserRouter>
  );
};

export default App;
