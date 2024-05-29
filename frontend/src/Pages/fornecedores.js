import React from "react";
import Fornecedor_form from "../Components/Fornecedor_form";
import TabelaClientes from "../Components/Fornecedor_tabela";
import '../css/fornecedorform.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/fornecedortabela.css';
import Rodape from "../Components/Rodape";
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from "react-bootstrap/esm/Row";




const Fornecedores = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
<Container>
  <Row>
    <Col></Col><Col> <center>
          <br/>
          <h1>Fornecedores </h1>
          <br/>
        </center>
        
    <Fornecedor_form/></Col><Col></Col>
  </Row>
  <Row>
    <Col></Col><Col></Col><Col> <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Tabela Fornecedores</Modal.Title>
        </Modal.Header>
        <Modal.Body> <TabelaClientes/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Fechar
          </Button>
          
        </Modal.Footer>
      </Modal>
    <Button className="botaotabela" variant="primary" onClick={handleShow}>
        Tabela Fornecedores
      </Button></Col>
  </Row>
</Container>
<br/><br/><br/><br/><br/><br/><br/>
       

   

        <Rodape/>
    </>
  );
};

export default Fornecedores;
