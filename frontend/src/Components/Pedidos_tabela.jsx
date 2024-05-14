 import React, { useState } from "react";
 import axios from "axios";


 function Tabela_pedidos() {
    const [cliente, setCliente] = useState('');
    const [produto, setProduto] = useState('');
    const [clienteNome, setClienteNome] = useState('');
    const [produtoNome, setProdutoNome] = useState('');
  
    const handleBuscarCliente = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3001/clientes/${id}`);
        setClienteNome(response.data.nome);
      } catch (error) {
        console.error('Erro ao buscar cliente:', error);
      }
    };
  
    const handleBuscarProduto = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3001/produtos/${id}`);
        setProdutoNome(response.data.nomeProduto);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };
  
    const handleAdicionarPedido = async () => {
      try {
      
        await axios.post('http://localhost:3000/pedidos', {
         id: cliente.id,
          idProdutos: produto.idProdutos
        });
        alert('Pedido adicionado com sucesso');
      } catch (error) {
        console.error('Erro ao adicionar pedido:', error);
        alert('Erro ao adicionar pedido');
      }
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="ID do Cliente"
          onChange={(e) => setCliente(e.target.value)}
        />
        <button onClick={() => handleBuscarCliente(cliente)}>Buscar Cliente</button>
        <br />
        <input
          type="text"
          placeholder="ID do Produto"
          onChange={(e) => setProduto(e.target.value)}
        />
        <button onClick={() => handleBuscarProduto(produto)}>Buscar Produto</button>
        <br />
        <button onClick={handleAdicionarPedido}>Adicionar Pedido</button>
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Produto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{clienteNome}</td>
              <td>{produtoNome}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  
  }
  


 export default Tabela_pedidos;