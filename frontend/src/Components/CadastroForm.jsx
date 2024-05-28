// CadastroForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../css/cadastrofunc.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Box } from "@chakra-ui/react"
import Button from 'react-bootstrap/Button';

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    rg: '',
    data_nascimento: '',
    cep: '',
    celular: '',
    cargo: '',
    departamento: '',
    data_admissao: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleReload = () => {
    window.location.reload();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/cadastros', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        email: '',
        cpf: '',
        rg: '',
        data_nascimento: '',
        cep: '',
        celular: '',
        cargo: '',
        departamento: '',
        data_admissao: '',
        senha: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
    }
  };

  return (
    <>
 <center>
  
  <Box className='box' boxShadow='2xl' p='6' rounded='xl' bg='white'>
    <form className='formcadastro' onSubmit={handleSubmit}>
          <Container className='footer'>
              <Row className='hori1'>
                <Col md={3} className='colhori'>
                <p className='legendacadas'>Nome</p>
                <input autocomplete="off" type="text" name="nome"  value={formData.nome} onChange={handleChange} /></Col>

                <Col   md={3} >
                <p className='legendacadas'>Email</p>
                <input autocomplete="off"  type="email" name="email" value={formData.email} onChange={handleChange} /></Col>

                <Col  md={3} >
                <p className='legendacadas'>CPF</p>
                <input autocomplete="off" type="number" name="cpf"  value={formData.cpf} onChange={handleChange} /></Col>

              </Row>
      
       
      

               <Row className='hori2'>
               <Col md={3} className='colhori'>
               <p className='legendacadas'>RG</p>
               <input autocomplete="off" type="number" name="rg" value={formData.rg} onChange={handleChange} /></Col>

               <Col md={3} >
               <p className='legendacadas'>Telefone</p>
               <input autocomplete="off" type="number" name="celular" value={formData.celular} onChange={handleChange} /></Col>
  
               <Col md={3} >
               <p className='legendacadas'>Cargo</p>
               <input autocomplete="off" type="text" name="cargo" value={formData.cargo} onChange={handleChange} /></Col>
      
               
            
               </Row>
      
     

              <Row className='hori3'>
               <Col md={3} >
               <p className='legendacadas'>Departamento</p>
               <input autocomplete="off" type="text" name="departamento" value={formData.departamento} onChange={handleChange} /></Col>

               <Col md={3} >
               <p className='legendacadas'>Senha</p>
               <input autocomplete="off" type="password" name="senha" value={formData.senha} onChange={handleChange} /></Col>

               <Col md={3} >
               <p className='legendacadas'>CEP</p>
                <input autocomplete="off" type="number" name="cep" value={formData.cep} onChange={handleChange} /></Col>
      
              
              </Row>

              <Row className='hori4'>
                <Col  md={3} >
                <p className='legendacadas'>Data de admissão</p>
                <input autocomplete="off" className='dataad' type="date" name="data_admissao"  value={formData.data_admissao} onChange={handleChange} /></Col>
                
                <Col md={3} >
                <p className='legendacadas'>Data de nascimento </p>
                <input autocomplete="off" className='datanasci' type="date" name="data_nascimento"  value={formData.data_nascimento} onChange={handleChange} /></Col>

                <Col md={3} className='salvar'  >
                <Button autocomplete="off" type="submit" onClick={handleReload} className='botao' variant="outline-light">Salvar</Button>{' '}</Col>
               
                
                
              </Row> 
               </Container>   
              </form>
  </Box>

    
      
      

  
      

      

      
    
      
    
      

      

     
 
 </center>
    
    </>
    
  );
};

export default CadastroForm;
