import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importe useHistory do react-router-dom;
import { Box } from '@chakra-ui/react';
import logo from "../Imagens/multilogo.png"
import '../css/login.css';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from "react-bootstrap/esm/Row";
const Login = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setsenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate aqui

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { cpf, senha });
      console.log(response.data.message);
      
      // Redirecionar para a página de home após o login bem-sucedido
      navigate('/pedidos'); // Use history.push aqui
    } catch (error) {
      console.error('Erro durante o login:', error);
      setError('CPF ou senha inválido');
    }
  };

  return (  
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col>
      <Box boxShadow='2xl' p='5'  bg='white'  h="500px"  >
    
      <img className='logo_login' src={logo} width="40%"/>
      <h5>seja bem vindo!</h5>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>
      <div>
        <label>senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setsenha(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Login</button></Box></Col>
      <Col></Col>
      </Row>
      </Container>
    </div> 
  );
};

export default Login;
