import  Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Rodape.css";
import Button from 'react-bootstrap/Button';
import React from "react";
import Form from 'react-bootstrap/Form';
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Rodape () {
    return (
   <>
   <footer className="navbarbackground">
    <Container>
        <Row>
        <Col md={4} className="form">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       <h5>Novidades e lançamentos</h5>
        <Form.Control className="email" type="email" placeholder="Seu Email" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
        </Col>

        <Col md={4}>
          <Col md={10}>
            <div className="texto2-rodape">
              <h3>Contato</h3>
              <p>R. Boa Vista, 825 - Boa Vista, São Caetano do Sul - SP, 09572-300</p>
              <p>(11)12345-6789</p>
              <p>contato@multilaser.com.br</p>
            </div>
          </Col>
        </Col>

        <Col md={4}>
        <div className="texto3-rodape">
        <h3>Redes Sociais</h3>
        <p>Nos siga e fique por dentro de tudo. </p>
        <p>Acompanhe promoções e ofertas especiais.</p>
        </div>

        <Container>
      <Row md={5}>
        <Col ><FaFacebookF/></Col>
        <Col  xs={6}><FaWhatsapp /></Col>
        <Col  ><FaInstagram /></Col>
        <Col  ><FaLinkedin /></Col>
      </Row>
    </Container></Col>

        </Row>
    </Container>
   </footer>
   </>
    );
}

export default Rodape;