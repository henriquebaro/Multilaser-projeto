import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import "../css/tabelapedidos.css";
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

function TabelaPedidosEnviados() {
  const [pedidosEnviados, setPedidosEnviados] = useState([]);
  const [fornecedores, setFornecedores] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pedidosRes = await axios.get("http://localhost:3001/novopedido");
        const fornecedoresRes = await axios.get("http://localhost:3001/fornecedores");

        setPedidosEnviados(pedidosRes.data);

        const fornecedoresObj = {};
        fornecedoresRes.data.forEach((fornecedor) => {
          fornecedoresObj[fornecedor.id_fornecedor] = fornecedor;
        });
        setFornecedores(fornecedoresObj);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const handleExcluirPedidoEnviado = async (id_enviados) => {
    try {
      await axios.delete(`http://localhost:3001/novopedido/${id_enviados}`);
      setPedidosEnviados(pedidosEnviados.filter(pedido => pedido.id_enviados !== id_enviados));
      console.log("Pedido excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir pedido:", error);
    }
  };

  return (
    <TableContainer>
      <Table variant='simple' colorScheme='teal'>
        <TableCaption>Tabela de Pedidos Enviados</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nome do Fornecedor</Th>
            <Th>Telefone</Th>
            <Th>Valor Total</Th>
            <Th>Data de Recebimento</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {pedidosEnviados.map((pedido) => (
            <Tr key={pedido.id_enviados}>
              <Td>{pedido.id_enviados}</Td>
              <Td>{pedido.id_fornecedor}</Td>
          <Td>{fornecedores[pedido.id_fornecedor]?.telefone || '-'}</Td>
              <Td>{pedido.valor_total}</Td>
              <Td>{pedido.data_receber}</Td>
              <Td>
                <Button onClick={() => handleExcluirPedidoEnviado(pedido.id_enviados)}>Excluir</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TabelaPedidosEnviados;
