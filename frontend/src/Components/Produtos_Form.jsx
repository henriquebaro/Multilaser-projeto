import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Box } from "@chakra-ui/react"
import Button from 'react-bootstrap/Button';

const Produtos_form = () => {
    const [formData, setFormData] = useState({
      nomeProduto: '',
      quantidade: '',
      descricao: '',
      preco: '',
      
    });
    const handleReload = () => {
      window.location.reload();
    };
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:3001/produtos', formData);
        alert('Produto adicionado com sucesso');
        // Limpar o formulário após o envio bem-sucedido
        setFormData({
          nomeProduto: '',
          quantidade: '',
          descricao: '',
          preco: ''
        });
      } catch (error) {
        console.error('Erro ao adicionar o produto:', error);
        alert('erro ao adicionar o produto acionar o admin');
      }
    };
  
    return (
     
 <center>
   <Box className='box' boxShadow='2xl' p='6' rounded='xl' bg='white'>
        <form onSubmit={handleSubmit}>
          <Container>
            <Row className='hori1'>
            
            <Col md={4}>
            <p className='legenda'>Nome</p>
            <input type="text" name="nomeProduto"  value={formData.nomeProduto} onChange={handleChange} />
            </Col>

            <Col md={4}>
            <p className='legenda'>Quantidade</p>
            <input type="number" name="quantidade"  value={formData.quantidade} onChange={handleChange} />
            </Col>
            </Row>

            <Row className='hori2'>
              <Col md={4}>
              <p className='legenda'>Descrição</p>
              <input type="text" name="descricao" value={formData.descricao} onChange={handleChange} />
              </Col>

              <Col md={4}>
              <p className='legenda'>Preço</p>
              <input type="number" name="preco"  value={formData.preco} onChange={handleChange} />
              </Col>
            </Row>
          </Container>
        
        
     
        <Button variant="outline-light" className='botao' onClick={handleReload} type="submit">Salvar</Button>{' '}
     
        
      </form>
      </Box>
       </center>
      
      
    );
  };
  
  export default Produtos_form;
  