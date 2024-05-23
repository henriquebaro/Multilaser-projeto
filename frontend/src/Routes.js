import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Contato from './Pages/Contato';
import Cadastro from './Pages/Cadastro';
import Fornecedores from './Pages/fornecedores';
import Produto from './Pages/produtos';
import Clientes from './Pages/Clientes';
import Pedidos from './Pages/pedidos';
import Login from './Components/Login';

const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem('token');
  return auth ? children : <Navigate to="/login" />;
};

const Rotas = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/contato"
        element={
          <PrivateRoute>
            <Contato />
          </PrivateRoute>
        }
      />
      <Route
        path="/cadastro"
        element={
          <PrivateRoute>
            <Cadastro />
          </PrivateRoute>
        }
      />
      <Route
        path="/fornecedores"
        element={
          <PrivateRoute>
            <Fornecedores />
          </PrivateRoute>
        }
      />
      <Route
        path="/produtos"
        element={
          <PrivateRoute>
            <Produto />
          </PrivateRoute>
        }
      />
      <Route
        path="/clientes"
        element={
          <PrivateRoute>
            <Clientes />
          </PrivateRoute>
        }
      />
      <Route
        path="/pedidos"
        element={
          <PrivateRoute>
            <Pedidos />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Rotas;
