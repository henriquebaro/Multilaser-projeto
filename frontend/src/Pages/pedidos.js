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

    </Container> 
    <Rodape/>
    </>
  )
}
export default Pedidos
