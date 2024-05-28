import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Center, Input, InputGroup, InputRightElement, useDisclosure, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from '@chakra-ui/react';
import logo from "../Imagens/multilogosemfundo.png";
import '../css/login.css';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from "react-bootstrap/esm/Row";

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setsenha] = useState('');
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { cpf, senha });
      console.log(response.data.message);
      
      // Redirecionar para a página de home após o login bem-sucedido
      navigate('/pedidos');
    } catch (error) {
      console.error('Erro durante o login:', error);
      onOpen();
    }
  };

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col className='colpai'>
            <div className='pai-login'>
              <Center>
                <div className='imagem-login'>
                  <img className='logo_login' src={logo} width="170px" alt="Logo" />
                </div>
              </Center>
              <div className='caixa-login'>
                <Box boxShadow='2xl' bg='white' w="350px" h="350px">
                  <div className='input-login'>
                    <h5>Seja bem-vindo!</h5>
                    <div>
                      <label>CPF:</label>
                      <br />
                      <Input
                        className='input'
                        w="100%"
                        p="0%"
                        type="text"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <label>Senha:</label>
                      <br />
                      <InputGroup size='md'>
                        <Input
                          className='input'
                          w="100%"
                          p="0%"
                          type={show ? 'text' : 'password'}
                          value={senha}
                          onChange={(e) => setsenha(e.target.value)}
                          autoComplete="off"
                        />
                        <InputRightElement className='botao-show' width='4.5rem'>
                          <button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                          </button>
                        </InputRightElement>
                      </InputGroup>
                    </div>
                  </div>
                  <button className='botao-login' onClick={handleLogin}>
                    Login
                  </button>
                </Box>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
Erro ao efetuar a autenticação            </AlertDialogHeader>

            <AlertDialogBody>
              CPF ou senha inválido. Se o problema persistir contate o admin
            </AlertDialogBody>

            <AlertDialogFooter>
              <button className='botao-erro'  ref={cancelRef} onClick={onClose}>
                OK
              </button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
};

export default Login;
