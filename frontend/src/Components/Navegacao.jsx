import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro funcionarios</Link>
          </li>
      
          <li>
            <Link to="/produtos">produtos</Link>
          </li>
          <li>
            <Link to="/clientes">Cadastro clientes</Link>
          </li>
          <li>
            <Link to="/fornecedores">fornecedores</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
