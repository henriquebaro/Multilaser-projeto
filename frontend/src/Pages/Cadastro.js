//Cadastro
import React from "react";
import CadastroForm from "../Components/CadastroForm";
import TabelaCadastro from "../Components/TabelaCadastro";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import "../css/tabelacadastrofunc.css";
import Rodape from "../Components/Rodape";
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from "react-bootstrap/esm/Row";






const Cadastro   = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Container>
      <Row>
        <Col></Col>
        <Col> <br/>
    <center>
      <h1>Cadastro dos funcionários</h1>
    </center>
    <br/>
      <CadastroForm /></Col>
      <Col></Col>
      </Row>
      <Row>
      <Col></Col>
        
        <Col></Col>
      <Col><Button  className="botaotabela" variant="primary" onClick={handleShow}>
        Tabela Funcionários
      </Button>
     <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Tabela Funcionários</Modal.Title>
        </Modal.Header>
        <Modal.Body><TabelaCadastro/> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar Dados
          </Button>
        </Modal.Footer>
      </Modal></Col>
      </Row>
    </Container>
    <br/><br/><br/><br/><br/><br/><br/>


    <Rodape/>
    </>
  );
};

export default Cadastro;
