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
import { CiLogout } from "react-icons/ci";
import "../css/navbar.css"
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
           
                    <Link className='link' to="/cadastro">Cadastro Funcionários</Link>
                    
                      <Link className='link' to="/clientes">Cadastro Clientes</Link>
                   
                   

                      <Link className='link' to="/produtos">Produtos</Link>
              
                      <Link className='link' to="/fornecedores">Fornecedores</Link>
                  
                  
                      <Link className='link'  to="/pedidos">Pedidos</Link>
             
                  <Link className='link' to="/"><CiLogout size={25} /></Link>
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