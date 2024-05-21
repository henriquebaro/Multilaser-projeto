import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import multilogosemfundo from '../Imagens/multilogosemfundo.png';


const Header = () => {
  return (
    <header>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="custom-navbar bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img src={multilogosemfundo} className='imagemlogo' alt="Multilaser Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Multilaser
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="letrahome">
                <Link to="/">Home</Link>
                <Link to="/contato">Contato</Link>
                  <NavDropdown 
                    title={<span>Páginas</span>}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={Link} to="/cadastro">Cadastro Funcionarios</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/clientes">Cadastro Clientes</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/produtos">Produtos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/fornecedores">Fornecedores</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/pedidos">Pedidos</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </header>
  );
};

export default Header;
