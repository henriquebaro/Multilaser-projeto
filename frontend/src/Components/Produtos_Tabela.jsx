import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Produtos.css";
import Button from 'react-bootstrap/Button';



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
      <table border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do produto</th>
            <th>Quantidade</th>
            <th>Descrição</th>
            <th>Preço</th>
            
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {cadastros.map((cadastro) => (
            <tr key={cadastro.idProdutos}>
              <td>{cadastro.idProdutos}</td>
              <td>{cadastro.nomeProduto}</td>
              <td>{cadastro.quantidade}</td>
              <td>{cadastro.descricao}</td>
              <td> R${cadastro.preco}</td>
             
              <td>
              <Button onClick={() => handleExcluirUsuario(cadastro.idProdutos)} >Excluir</Button>
               
              </td>
              {/* Renderizar outras colunas, se necessário */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabelaprodutos;