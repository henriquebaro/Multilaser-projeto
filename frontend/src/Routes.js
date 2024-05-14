import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Cadastro from "./Pages/Cadastro";
import Fornecedores from "./Pages/fornecedores";
import Produto from "./Pages/produtos";
import Clientes from "./Pages/Clientes";
import Pedidos from "./Pages/pedidos";
const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/fornecedores" element={<Fornecedores/>}/>
        <Route path="/produtos" element={<Produto/>}/>
        <Route path="/clientes" element={<Clientes/>}/>
        <Route path="/pedidos" element={<Pedidos/>}/>
      </Routes>
    </>
  );
};

export default Rotas;
