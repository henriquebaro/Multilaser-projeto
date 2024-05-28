import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Contato from './Pages/Contato';
import Cadastro from './Pages/Cadastro';
import Fornecedores from './Pages/fornecedores';
import Produto from './Pages/produtos';
import Clientes from './Pages/Clientes';
import Pedidos from './Pages/pedidos';
import Login from './Components/Login';



const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
<<<<<<< HEAD
    
=======
      
>>>>>>> f968d3e6f609da4dad6532864190f9c125cd363e
      <Route
        path="/contato"
        element={
         
            <Contato />
         
        }
      />
      <Route
        path="/cadastro"
        element={
         
            <Cadastro />
         
        }
      />
      <Route
        path="/fornecedores"
        element={
         
            <Fornecedores />
         
        }
      />
      <Route
        path="/produtos"element={ <Produto /> }/>
      <Route
        path="/clientes"
        element={
         
            <Clientes />
         
        }
      />
      <Route
        path="/pedidos"
        element={
         
            <Pedidos />
         
        }
      />
    </Routes>
  );
};

export default Rotas;
