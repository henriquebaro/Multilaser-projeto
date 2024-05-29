import React from "react";
import Produtos_form from "../Components/Produtos_Form";
import Tabelaprodutos from "../Components/Produtos_Tabela";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../css/tabelaprodutos.css";
import Rodape from "../Components/Rodape";
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from "react-bootstrap/esm/Row";

function Produto() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Container>
      <Row>
        <Col>
        </Col>
        <Col><center>
        <br/>
        <h1 className="h1produtos">Adicione os produtos</h1>
      </center> 
        <Produtos_form/> 
        </Col>
        <Col>
        </Col>
      </Row>
<Row>
<Col></Col>
 <Col></Col> 
 <Col>  <Modal show={show} onHide={handleClose}>
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

     <Button className="botaotabela" variant="primary" onClick={handleShow}>
        Tabela Produtos
      </Button> </Col>
</Row>
    </Container>
      
    <br/><br/><br/><br/>
  
   <Rodape/>  
    </>
  );
}

export default Produto;