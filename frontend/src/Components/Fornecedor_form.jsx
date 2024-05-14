import React, { useState } from 'react';
import axios from 'axios';
import '../css/fornecedorform.css'
import { Box } from '@chakra-ui/react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Fornecedor_form = () => {
  const [formData, setFormData] = useState({
    nome_empresa: '',
    email: '',
    telefone: '',
    cep: '',
    cnpj: ''
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
      await axios.post('http://localhost:3001/fornecedores', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome_empresa: '',
    email: '',
    telefone: '',
    cep: '',
    cnpj: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
    }
  };

  return (
   <center>
      <Box className='box' boxShadow='2xl' p='6' rounded='xl' bg='white'> 
      <center>
 <form onSubmit={handleSubmit}>
        <Container>
          <Row>
            <Col md={4}>
            <p className='legendacadasforn'>Empresa</p>
            <input type="text" name="nome_empresa"  value={formData.nome_empresa} onChange={handleChange} />
            </Col>

            <Col md={4}>
            <p className='legendacadasforn'>Email</p>
            <input type="email" name="email"  value={formData.email} onChange={handleChange} />
            </Col>

            <Col md={4}>
            <p className='legendacadasforn'>CNPJ</p>
            <input type="number" name="cnpj"  value={formData.cnpj} onChange={handleChange} />
            </Col>

          </Row>
        
         <Row>
          <Col md={4} className='CEP'>
          <p className='legendacadasforn'>CEP</p>
          <input  type="number" name="cep"  value={formData.cep} onChange={handleChange} />
          </Col>

          <Col md={4}>
          <p className='legendacadasforn'>Telefone</p>
          <input type="number" name="telefone" value={formData.telefone} onChange={handleChange} />
          </Col>

          <Col md={4} className='salvar'>
          <Button type="submit" onClick={handleReload} className='fornbotao' variant="outline-light">Salvar</Button>{' '}
          </Col>
         </Row>
      </Container>
      
      
      
     
    </form>
      </center>
     
    
      </Box>
    </center>
    
  );
};

export default Fornecedor_form;
