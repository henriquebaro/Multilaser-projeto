import { React, useEffect, useState } from "react";
import axios from "axios";
import '../css/cadastrofunc.css';
import "../css/tabelacadastrofunc.css";
import Button from 'react-bootstrap/Button';

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
function converterData(dataMySQL) {
  // Divide a data MySQL em partes
  var partesHora = dataMySQL.split('T');

  var partesData = partesHora[0].split('-');


  // Formata a data no padrão brasileiro
  var dataFormatada = partesData[2] + '/' + partesData[1] + '/' + partesData[0];

  return dataFormatada;
}


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
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
   
            <TableContainer>
  <Table variant='siple' colorScheme='teal'>
    <TableCaption></TableCaption>
    <Thead>
      <Tr>
      <Th>ID</Th>
                <Th>Nome</Th>
                <Th>Email</Th>
                <Th>CPF</Th>
                <Th>RG</Th>
                <Th>Data nascimento</Th>
                <Th>CEP</Th>
                <Th>Celular</Th>
                <Th>Cargo</Th>
                <Th>Departamento</Th>
                <Th>Data de admissão</Th>
                <Th>Ação</Th>
                <Th>Senha</Th>
      </Tr>
    </Thead>
    <Tbody>
    {cadastros.map((cadastro) => (
                <Tr key={cadastro.id_funcionarios}>
                  <Td>{cadastro.id_funcionarios}</Td>
                  <Td>{cadastro.nome}</Td>
                  <Td>{cadastro.email}</Td>
                  <Td isNumeric>{cadastro.cpf}</Td>
                  <Td isNumeric>{cadastro.rg}</Td>
                  <Td isNumeric>{converterData(cadastro.data_nascimento)}</Td>
                  <Td>{cadastro.cep}</Td>
                  <Td isNumeric>{cadastro.celular}</Td>
                  <Td>{cadastro.cargo}</Td>
                  <Td>{cadastro.departamento}</Td>
                  <Td isNumeric>{converterData(cadastro.data_admissao)}</Td>
                  <Td>{cadastro.senha}</Td>
                  <Td>
                    <Button onClick={() => handleExcluirUsuario(cadastro.id_funcionarios)}>Excluir</Button>
                  </Td>
                 </Tr>   
                   ))}
                  </Tbody>
    <Tfoot>
      <Tr>
        <Th></Th>
        <Th></Th>
        <Th ></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </div>
  );
};

export default TabelaCadastro;