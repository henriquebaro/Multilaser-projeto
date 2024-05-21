import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider } from "@chakra-ui/react";
//Importar complementos aqui
import Rotas from "./Routes";


//Importar componentes aqui
import Navegacao from "./Components/Navegacao";



const App = () => {
 
  return (
    <>

      <Router>
  
        <ChakraProvider>
          <Navegacao />
          <Rotas />
        </ChakraProvider>
 
      </Router>

    </>
  );
};

export default App;
