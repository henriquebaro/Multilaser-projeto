import React from "react";
// import Pedidos_form from '../Components/Pedidos_form';
import Tabela_pedidos from '../Components/Pedidos_tabela';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import "../css/tabelapedidos.css";

function Pedidos(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <h1> adicione um novo pedido</h1>
         {/* <Pedidos_form/>  */}
        
        <Button className="botaotabela" variant="primary" onClick={handleShow}>
        Tabela Pedidos
      </Button>
     <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Tabela Pedidos</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Tabela_pedidos/> </Modal.Body>
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
    )
}
export default Pedidos