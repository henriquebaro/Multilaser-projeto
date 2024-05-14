import React, { useState } from "react";
import axios from "axios";
import Pedidos_form from "./Pedidos_form";

function Tabela_pedidos() {
  const [clienteId, setClienteId] = useState(null);
  const [clienteNome, setClienteNome] = useState("");
  const [produtoId, setProdutoId] = useState(null);
  const [produtoNome, setProdutoNome] = useState("");
  const [pedidos, setPedidos] = useState([]);

  const handleBuscarCliente = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/clientes/${id}`);
      setClienteId(response.data.id);
      setClienteNome(response.data.nome);
    } catch (error) {
      console.error('Erro ao buscar cliente:', error);
    }
  };

  const handleBuscarProduto = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/produtos/${id}`);
      setProdutoId(response.data.idProdutos);
      setProdutoNome(response.data.nomeProduto);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
    }
  };

  const handleAdicionarPedido = async () => {
    try {
      await axios.post('http://localhost:3001/pedidos', {
        id: clienteId,
        idProdutos: produtoId
      });
      const novoPedido = { cliente: clienteNome, produto: produtoNome };
      setPedidos([...pedidos, novoPedido]);
      alert('Pedido adicionado com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar pedido:', error);
      alert('Erro ao adicionar pedido');
    }
  };

  return (
    <div>
      <Pedidos_form tipo="cliente" onBuscar={handleBuscarCliente} />
      <Pedidos_form tipo="produto" onBuscar={handleBuscarProduto} />
      <button onClick={handleAdicionarPedido}>Adicionar Pedido</button>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Produto</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido, index) => (
            <tr key={index}>
              <td>{pedido.cliente}</td>
              <td>{pedido.produto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabela_pedidos;
