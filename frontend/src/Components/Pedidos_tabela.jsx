import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

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
      <select name="id_cliente" id="id_cliente" onChange={handleClienteChange}>
        <option value="">Selecione o cliente</option>
        {slClientes.map((slCliente) => (
          <option key={slCliente.id} value={slCliente.id}>{slCliente.nome}</option>
        ))}
      </select>

      <select name="id_produto" id="id_produto" onChange={handleProdutoChange}>
        <option value="">Selecione o Produto</option>
        {slProdutos.map((slProduto) => (
          <option key={slProduto.idProdutos} value={slProduto.idProdutos}>{slProduto.nomeProduto}</option>
        ))}
      </select>

      {quantidadeDisponivel > 0 && (
        <select name="quantidade" id="quantidade" onChange={handleQuantidadeChange}>
          <option value="">Selecione a quantidade</option>
          {Array.from({ length: quantidadeDisponivel }, (_, index) => index + 1).map((quantidade) => (
            <option key={quantidade} value={quantidade}>
              {quantidade}
            </option>
          ))}
        </select>
      )}

      <div>Valor Total: R$ {valorTotal.toFixed(2)}</div>

      <button onClick={handleAdicionarPedido}>Adicionar Pedido</button>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id_pedido}>
              <td>{pedido.id_pedido}</td>
              <td>{clientes[pedido.id]}</td>
              <td>{produtos[pedido.idProdutos]}</td>
              <td>{pedido.quantidade}</td>
              <td>{typeof pedido.valorTotal === 'number' ? `R$ ${pedido.valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'Valor Indisponível'}</td>
              <td>
                <Button onClick={() => handleExcluirUsuario(pedido.id_pedido)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tabela_pedidos;
