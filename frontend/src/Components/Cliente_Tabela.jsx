import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';

const TabelaClientes = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/clientes");
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/clientes/${id}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/clientes");
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
            <th>Nome</th>
            <th>Email</th>
            <th>CPF</th>
            <th>Data nascimento</th>
            <th>CEP</th>
            <th>Celular</th>
            
       
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {cadastros.map((cadastro) => (
            <tr key={cadastro.id}>
              <td>{cadastro.id}</td>
              <td>{cadastro.nome}</td>
              <td>{cadastro.email}</td>
              <td>{cadastro.cpf}</td>
              <td>{cadastro.data_nascimento}</td>
              <td>{cadastro.cep}</td>
              <td>{cadastro.celular}</td>
          
              <td>
              <Button onClick={() => handleExcluirUsuario(cadastro.id)} className="botaotabela">Excluir</Button>
              </td>
              {/* Renderizar outras colunas, se necessário */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaClientes;