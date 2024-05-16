import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';

function Tabela_pedidos() {
  const [slClientes, setSlClientes] = useState([]);
  const [slProdutos, setSlProdutos] = useState([]);
  const [idClientela, setClienteId] = useState(null);
  const [idProducts, setProdutoId] = useState(null);
  const [pedidos, setPedidos] = useState([]);

  const handleClienteChange = (event) => {
    setClienteId(event.target.value);
  };

  const handleProdutoChange = (event) => {
    setProdutoId(event.target.value);
  };

  const handleAdicionarPedido = async () => {
    try {
      await axios.post('http://localhost:3001/pedidos', {
        id: idClientela,
        idProdutos: idProducts
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
        const { data } = await axios.get("http://localhost:3001/clientes");
        setSlClientes(data);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/produtos");
        setSlProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/pedidos");
        setPedidos(data);
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    };
   
    fetchData();
  }, []);
 const handleExcluirUsuario = async (id_pedido) => {
      try {
        await axios.delete(`http://localhost:3001/pedidos/${id_pedido}`);
        // Atualiza a lista de cadastros após a exclusão
        const { data } = await axios.get("http://localhost:3001/pedidos");
        setPedidos(data);
        console.log("Usuário excluído com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir usuário:", error);
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

      <button onClick={handleAdicionarPedido}>Adicionar Pedido</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Produto</th>
          </tr>
        </thead>
        <tbody>
  {pedidos.map((pedido) => (
    <tr key={pedido.id_pedido}>
      <td>{pedido.id_pedido}</td>
      <td>{slClientes.find(clientes => clientes.id === pedido.id_cliente)?.nome}</td>
      <td>{slProdutos.find(produtos => produtos.idProdutos === pedido.id_produto)?.nomeProduto}</td>
      <td>
        <Button onClick={() => handleExcluirUsuario(pedido.id_pedido)}>Excluir</Button>
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}

export default Tabela_pedidos;
