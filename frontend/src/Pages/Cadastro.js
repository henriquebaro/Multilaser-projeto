//Cadastro
import React from "react";
import CadastroForm from "../Components/CadastroForm";
import TabelaCadastro from "../Components/TabelaCadastro";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import "../css/tabelacadastrofunc.css";
import Rodape from "../Components/Rodape";






const Cadastro   = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <br/>
    <center>
      <h1>Cadastro dos funcionários</h1>
    </center>
    <br/>
      <CadastroForm />
    
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Rodape/>

<Button className="botaotabela" variant="primary" onClick={handleShow}>
        Tabela Cadastro Funcionários
      </Button>
     <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Tabela Cadastro Funcionários</Modal.Title>
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
      </Modal>
    
    </>
  );
};

export default Cadastro;
