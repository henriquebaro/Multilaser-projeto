import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import "../css/fornecedortabela.css";
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

const TabelaFornecedores = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/fornecedores");
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id_fornecedor) => {
    try {
      await axios.delete(`http://localhost:3001/fornecedores/${id_fornecedor}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/fornecedores");
      setCadastros(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <div>
      <TableContainer>
        <Table variant='siple' colorScheme='teal'>
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>telefone</Th>
              <Th>CEP</Th>
              <Th>cnpj</Th>
              <Th isNumeric></Th>
            </Tr>
          </Thead>
          <Tbody>
            {cadastros.map((cadastro) => (
              <Tr key={cadastro.id_fornecedor}>
                <Td>{cadastro.id_fornecedor}</Td>
                <Td>{cadastro.nome_empresa}</Td>
                <Td>{cadastro.email}</Td>
                <Td>{cadastro.telefone}</Td>
                <Td>{cadastro.cep}</Td>
                <Td>{cadastro.cnpj}</Td>


                <Td>
                  <Button onClick={() => handleExcluirUsuario(cadastro.id_fornecedor)}>Excluir</Button>
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
    </div>
  );
};

export default TabelaFornecedores;