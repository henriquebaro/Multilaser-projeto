import React from "react";
import Produtos_form from "../Components/Produtos_Form";
import Tabelaprodutos from "../Components/Produtos_Tabela";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pedidos_form from '../Components/Pedidos_form';
import Tabela_pedidos from '../Components/Pedidos_tabela'

function Produto() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>   <Tabelaprodutos/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <h1>adicione produtos</h1>
     <Produtos_form/>
     <h1>
      faça um pedido
     </h1>
  <Pedidos_form/>
  {/* <Tabela_pedidos/> */}
    </>
  );
}

export default Produto;