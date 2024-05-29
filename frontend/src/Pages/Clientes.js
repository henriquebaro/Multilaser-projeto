import React from "react";
import ClienteForm from "../Components/Cliente_Form";
import TabelaClientes from "../Components/Cliente_Tabela";
import '../css/cadastroclientes.css'
import "../css/tabelacadastrocliente.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import '../css/navbar.css'
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from "react-bootstrap/esm/Row";
import Rodape from "../Components/Rodape";


const Clientes = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <div>
        <br />
        

        
        <Container>
    <Row>
    <Col></Col> <Col><center>
          <h2 className="h2">CADASTRE-SE</h2>
        </center>
        <br />
        <ClienteForm /></Col> <Col></Col>
    </Row>
    <Row> <Col></Col> <Col></Col> <Col><Button className="botaotabela" variant="primary" onClick={handleShow}>
          Tabela Clientes
        </Button>
        <Modal show={show} onHide={handleClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Tabela Clientes</Modal.Title>
          </Modal.Header>
          <Modal.Body> <TabelaClientes /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Salvar Dados
            </Button>
          </Modal.Footer>
        </Modal></Col></Row>
   </Container>
   <br/><br/><br/><br/><br/><br/><br/>
     <Rodape/>

      </div>
    </>
  );
};

export default Clientes;