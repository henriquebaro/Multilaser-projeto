import React from "react";
import Produtos_form from "../Components/Produtos_Form";
import Tabelaprodutos from "../Components/Produtos_Tabela";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Produto() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tabela Produtos</Modal.Title>
        </Modal.Header>
        <Modal.Body>   <Tabelaprodutos/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar Dados
          </Button>
        </Modal.Footer>
      </Modal>
      <h1>adicione produtos</h1>
     <Produtos_form/>
     <Button variant="primary" onClick={handleShow}>
        Tabela Produtos
      </Button>
 
    </>
  );
}

export default Produto;