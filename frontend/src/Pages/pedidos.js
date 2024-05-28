<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Pedidos_form from '../Components/Pedidos_form';
import Tabela_pedidos from '../Components/Pedidos_tabela';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Box } from "@chakra-ui/react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/formpedidos.css";
import "../css/tabelapedidos.css";
import Rodape from "../Components/Rodape";
=======
import React from "react";
import Pedido from "../Components/Pedidos_form"
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Pedidos_enviado from "../Components/Pedidos_enviados.js";
import Col from "react-bootstrap/esm/Col";
import Rodape from "../Components/Rodape.jsx"
function Pedidos (){
  return(
    <>
    <Container>
      <Row>
        <Col>
    <Pedido/>
    </Col>
      <Col>
<Pedidos_enviado/>
</Col>
 </Row>
>>>>>>> 0e7d93003d4659cc86a0873ec88f4fb830aadcd8

    </Container> 
    <Rodape/>
    </>
  )
}
export default Pedidos
