import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Produtos.css";
import Button from 'react-bootstrap/Button';
import "../css/tabelaprodutos.css";
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

const Tabelaprodutos = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/produtos");
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idProdutos) => {
    try {
      await axios.delete(`http://localhost:3001/produtos/${idProdutos}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/produtos");
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
              <Th>Nome do produto</Th>
              <Th>Quantidade</Th>
              <Th>Descrição</Th>
              <Th>Preço</Th>
              <Th isNumeric></Th>
            </Tr>
          </Thead>
          <Tbody>
            {cadastros.map((cadastro) => (
              <Tr key={cadastro.idProdutos}>
                <Td>{cadastro.idProdutos}</Td>
                <Td>{cadastro.nomeProduto}</Td>
                <Td>{cadastro.quantidade}</Td>
                <Td>{cadastro.descricao}</Td>
                <Td> R${cadastro.preco}</Td>

                <Td>
                  <Button onClick={() => handleExcluirUsuario(cadastro.idProdutos)} >Excluir</Button>

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

export default Tabelaprodutos;