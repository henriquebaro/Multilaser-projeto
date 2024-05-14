import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import "../css/fornecedortabela.css";

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
    <div className="tabelafornecedor">
      <table border={2} cellPadding={5} cellSpacing={5} >
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>telefone</th>
            <th>CEP</th>    
            <th>cnpj</th>
            
            
       
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {cadastros.map((cadastro) => (
            <tr key={cadastro.id_fornecedor}>
              <td>{cadastro.id_fornecedor}</td>
              <td>{cadastro.nome_empresa}</td>
              <td>{cadastro.email}</td>
              <td>{cadastro.telefone}</td>
              <td>{cadastro.cep}</td>
              <td>{cadastro.cnpj}</td>
              
          
              <td>
              <Button onClick={() => handleExcluirUsuario(cadastro.id_fornecedor)}>Excluir</Button>
              </td>
              {/* Renderizar outras colunas, se necessário */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaFornecedores;