import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Pedidos_form = () => {
    const [dadosCombinados, setDadosCombinados] = useState([]);

  useEffect(() => {
    const fetchDadosCombinados = async () => {
      try {
        const response = await axios.get('http://localhost:3000/dadosCombinados');
        setDadosCombinados(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados combinados:', error);
      }
    };
    fetchDadosCombinados();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID Pedido</th>
          <th>Cliente</th>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Data do Pedido</th>
        </tr>
      </thead>
      <tbody>
        {dadosCombinados.map(dado => (
          <tr key={dado.id_pedido}>
            <td>{dado.id_pedido}</td>
            <td>{dado.nome_cliente}</td>
            <td>{dado.nome_produto}</td>
            <td>{dado.quantidade}</td>
            <td>{dado.data_pedido}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

  export default Pedidos_form;
  