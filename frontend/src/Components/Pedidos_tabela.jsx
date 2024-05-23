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

function Tabela_pedidos() {
  const [slClientes, setSlClientes] = useState([]);
  const [slProdutos, setSlProdutos] = useState([]);
  const [idClientela, setClienteId] = useState(null);
  const [idProducts, setProdutoId] = useState(null);
  const [pedidos, setPedidos] = useState([]);
  const [clientes, setClientes] = useState({});
  const [produtos, setProdutos] = useState({});
  const [quantidadeDisponivel, setQuantidadeDisponivel] = useState(0);
  const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(0);
  const [precoProduto, setPrecoProduto] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  const handleClienteChange = (event) => {
    setClienteId(event.target.value);
  };

  const handleProdutoChange = (event) => {
    const produtoId = event.target.value;
    setProdutoId(produtoId);

    const produtoSelecionado = slProdutos.find(produto => produto.idProdutos === parseInt(produtoId));
    if (produtoSelecionado) {
      setQuantidadeDisponivel(produtoSelecionado.quantidade);
      setPrecoProduto(produtoSelecionado.preco);
    }
  };

  const handleQuantidadeChange = (event) => {
    const quantidade = parseInt(event.target.value);
    setQuantidadeSelecionada(quantidade);
    setValorTotal(quantidade * precoProduto);
  };

  const handleAdicionarPedido = async () => {
    const valorTotalPedido = quantidadeSelecionada * precoProduto;
    try {
      await axios.post('http://localhost:3001/pedidos', {
        id: idClientela,
        idProdutos: idProducts,
        quantidade: quantidadeSelecionada,
        valorTotal: valorTotalPedido
      });
      window.location.reload();
      alert('Pedido adicionado com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar pedido:', error);
      alert('Erro ao adicionar pedido');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [clientesData, produtosData, pedidosData] = await Promise.all([
          axios.get("http://localhost:3001/clientes"),
          axios.get("http://localhost:3001/produtos"),
          axios.get("http://localhost:3001/pedidos")
        ]);

        setSlClientes(clientesData.data);
        setSlProdutos(produtosData.data);

        const pedidosFormatados = pedidosData.data.map(pedido => ({
          ...pedido,
          valorTotal: parseFloat(pedido.valorTotal)
        }));

        setPedidos(pedidosFormatados);

        const clientesObj = {};
        clientesData.data.forEach((cliente) => {
          clientesObj[cliente.id] = cliente.nome;
        });
        setClientes(clientesObj);

        const produtosObj = {};
        produtosData.data.forEach((produto) => {
          produtosObj[produto.idProdutos] = produto.nomeProduto;
        });
        setProdutos(produtosObj);

      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id_pedido) => {
    try {
      await axios.delete(`http://localhost:3001/pedidos/${id_pedido}`);
      const { data } = await axios.get("http://localhost:3001/pedidos");
      setPedidos(data);
      console.log("Pedido excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir pedido:", error);
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
              <Th>Cliente</Th>
              <Th>Produto</Th>
              <Th>Quantidade</Th>
              <Th>Valor Total</Th>
              <Th>Ações</Th>
              <Th isNumeric></Th>
            </Tr>
          </Thead>
          <Tbody>
            {pedidos.map((pedido) => (
              <Tr key={pedido.id_pedido}>
                <Td>{pedido.id_pedido}</Td>
                <Td>{clientes[pedido.id]}</Td>
                <Td>{produtos[pedido.idProdutos]}</Td>
                <Td>{pedido.quantidade}</Td>
                <Td>{typeof pedido.valorTotal === 'number' ? `R$ ${pedido.valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'Valor Indisponível'}</Td>
                <Td>
                  <Button onClick={() => handleExcluirUsuario(pedido.id_pedido)}>Excluir</Button>
                </Td>
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
}

export default Tabela_pedidos;
