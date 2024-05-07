import React from 'react';

const CadastroItem = ({ cadastro, onDelete }) => {
  return (
    <tr>
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
      <td>
        <button onClick={() => onDelete(cadastro.id_funcionarios)}>Excluir</button>
      </td>
    </tr>
  );
};

export default CadastroItem;
