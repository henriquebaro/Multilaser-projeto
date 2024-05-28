import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import "../css/tabelacadastrocliente.css";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const TabelaClientes = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/clientes");
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/clientes/${id}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/clientes");
      setCadastros(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };
  function converterData(dataMySQL) {
    // Divide a data MySQL em partes
    var partesHora = dataMySQL.split('T');
  
    var partesData = partesHora[0].split('-');
  
  
    // Formata a data no padrão brasileiro
    var dataFormatada = partesData[2] + '/' + partesData[1] + '/' + partesData[0];
  
    return dataFormatada;
  }
  
  return (
    <>
      <TableContainer>
        <Table variant='siple' colorScheme='teal'>
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>CPF</Th>
              <Th>Data nascimento</Th>
              <Th>CEP</Th>
              <Th>Celular</Th>
              <Th isNumeric></Th>
            </Tr>
          </Thead>
              <Tbody>
                {cadastros.map((cadastro) => (
                  <Tr key={cadastro.id}>
                    <Td>{cadastro.id}</Td>
                    <Td>{cadastro.nome}</Td>
                    <Td>{cadastro.email}</Td>
                    <Td>{cadastro.cpf}</Td>
                    <Td>{converterData(cadastro.data_nascimento)}</Td>
                    <Td>{cadastro.cep}</Td>
                    <Td>{cadastro.celular}</Td>

                    <Td>
                      <Button onClick={() => handleExcluirUsuario(cadastro.id)}>Excluir</Button>
                    </Td>
                    {/* Renderizar outras colunas, se necessário */}
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </>
        );
};

        export default TabelaClientes;