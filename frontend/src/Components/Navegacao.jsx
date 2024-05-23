import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import multilogosemfundo from '../Imagens/multilogosemfundo.png';

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="navdois" >
          <Container fluid>
            <Navbar.Brand href="#"><img src={multilogosemfundo} className='logoimg'/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className='navdois'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='multitext'>
                  Multilaser
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='navdois'>
                <Nav className="list">
                  <Link to="/" className='linkhome'>Home</Link>
                  <Link to="/contato" className='linkcontato'>Contato</Link>
                  <NavDropdown
                    title="Páginas"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className='paginasletra'
                  >
                    <NavDropdown.Item href="#action3"> <Link to="/cadastro">Cadastro funcionarios</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      <Link to="/clientes">Cadastro clientes</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      <Link to="/produtos">produtos</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      <Link to="/fornecedores">fornecedores</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      <Link to="/pedidos">pedidos</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;