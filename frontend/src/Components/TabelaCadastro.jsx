import React, { useState, useEffect } from "react";
import axios from "axios";
import '../CSS/cadastrofunc.css'

const TabelaCadastro = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/cadastros");
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id_funcionarios) => {
    try {
      await axios.delete(`http://localhost:3001/cadastros/${id_funcionarios}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/cadastros");
      setCadastros(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <div className="tabelacadastrofunc">
      <table border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>CPF</th>
            <th>RG</th>
            <th>Data nascimento</th>
            <th>CEP</th>
            <th>Celular</th>
            <th>Cargo</th>
            <th>Departamento</th>
            <th>Data de admissao</th>
            <th>Ação</th>
            <th>Senha</th>
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {cadastros.map((cadastro) => (
            <tr key={cadastro.id_funcionarios}>
              <td>{cadastro.id_funcionarios}</td>
              <td>{cadastro.nome}</td>
              <td>{cadastro.email}</td>
              <td>{cadastro.cpf}</td>
              <td>{cadastro.rg}</td>
              <td>{cadastro.data_nascimento}</td>
              <td>{cadastro.cep}</td>
              <td>{cadastro.celular}</td>
              <td>{cadastro.cargo}</td>
              <td>{cadastro.departamento}</td>
              <td>{cadastro.data_admissao}</td>
              <td>{cadastro.senha}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(cadastro.id_funcionarios)}
                >
                  Excluir
                </button>
              </td>
              {/* Renderizar outras colunas, se necessário */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaCadastro;