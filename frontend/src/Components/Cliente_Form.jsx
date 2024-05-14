import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Box } from "@chakra-ui/react"
import '../css/cadastroclientes.css'
import Button from 'react-bootstrap/Button';

const ClienteForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    data_nascimento: '',
    cep: '',
    celular: '',
    senha: ''
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
      await axios.post('http://localhost:3001/clientes', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        email: '',
        cpf: '',
        data_nascimento: '',
        cep: '',
        celular: '',
        senha: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
    }
  };

  return (
<center>
  <Box className='box' boxShadow='2xl' p='6' rounded='xl' bg='white'>
      <form onSubmit={handleSubmit}>
      <Container>
      
        <Row className='hori1'>
      <Col md={3}>
        <p className='legendainput'>Nome</p>
        <input type="text" name="nome"  value={formData.nome} onChange={handleChange} /></Col>

      <Col md={3}>
        <p className='legendainput'>Email</p>
        <input type="email" name="email" value={formData.email} onChange={handleChange} /></Col>

      <Col md={3}>
        <p className='legendainput'>CPF</p>
        <input type="number" name="cpf"  value={formData.cpf} onChange={handleChange} /></Col>

      <Col md={3} className='datadenasc'>
        <p className='legendainput'>Data de nascimento</p>
        <input type="date" name="data_nascimento"  value={formData.data_nascimento} onChange={handleChange} /></Col>

        </Row>

        <Row>
          <Col md={3}>
            <p className='legendainput'>CEP</p>
            <input type="number" name="cep" value={formData.cep} onChange={handleChange} /></Col>

          <Col md={3}>
            <p className='legendainput'>Telefone</p>
            <input type="number" name="celular"  value={formData.celular} onChange={handleChange} /></Col>

          <Col md={3}>
            <p className='legendainput'>Senha</p>
            <input type="password" name="senha"  value={formData.senha} onChange={handleChange} /></Col>

          <Col><Button type="submit" onClick={handleReload} className='botao' variant="outline-light">Salvar</Button>{' '}</Col>

        </Row>
      </Container>
      </form>
    </Box>
</center>
    
    
      
      
      
      
      
    
  );
};

export default ClienteForm;
