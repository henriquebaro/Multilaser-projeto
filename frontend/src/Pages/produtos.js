import React from "react";
import Produtos_form from "../Components/Produtos_Form";
import Tabelaprodutos from "../Components/Produtos_Tabela";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
<<<<<<< HEAD
import "../css/tabelaprodutos.css";
=======
import Rodape from "../Components/Rodape";

>>>>>>> 3ac0f3a37a592e5a712f62c44ffe7333d77b446f

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
      <center>
        <br/>
        <h1 className="h1produtos">Adicione os produtos</h1>
      </center>
       

     <Produtos_form/>
     <Button className="botaotabela" variant="primary" onClick={handleShow}>
        Tabela Produtos
      </Button>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <Rodape/>
    </>
  );
}

export default Produto;