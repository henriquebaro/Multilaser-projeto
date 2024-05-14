import React from "react";
import Fornecedor_form from "../Components/Fornecedor_form";
import TabelaClientes from "../Components/Fornecedor_tabela";
import '../css/fornecedorform.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/fornecedortabela.css';

const Fornecedores = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <center>
          <h2 className="h2">FORNECEDORES </h2>
        </center>
        
    <Fornecedor_form/>

    <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Tabela Fornecedores</Modal.Title>
        </Modal.Header>
        <Modal.Body> <TabelaClientes/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar Dados
          </Button>
        </Modal.Footer>
      </Modal>
    <Button className="botaotabela" variant="primary" onClick={handleShow}>
        Tabela Fornecedores
      </Button>
      </div>
    </>
  );
};

export default Fornecedores;
