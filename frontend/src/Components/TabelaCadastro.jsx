import { React, useEffect,useState } from "react";
import axios from "axios";
import '../css/cadastrofunc.css';
import '../css/TabelaCadastro.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
    <div className="tabelacadastrofunc">
      
      <Button onClick={() => setLgShow(true)} className="botaotabela">Tabela Cadastro</Button>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Tabela Cadastro
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>  <table border={2} cellPadding={5} cellSpacing={5}>
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
              <td>{converterData(cadastro.data_nascimento)}</td>
              <td>{cadastro.cep}</td>
              <td>{cadastro.celular}</td>
              <td>{cadastro.cargo}</td>
              <td>{cadastro.departamento}</td>
              <td>{converterData(cadastro.data_admissao)}</td>
              <td>{cadastro.senha}</td>
              <td>
                <Button onClick={() => handleExcluirUsuario(cadastro.id_funcionarios)}>Excluir</Button>
              </td>
              {/* Renderizar outras colunas, se necessário */}
            </tr>
          ))}
        </tbody>
      </table></Modal.Body>
      </Modal>
    </div>
  );
};

export default TabelaCadastro;