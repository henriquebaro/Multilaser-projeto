// CadastroForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    rg: '',
    data_nascimento: '',
    cep: '',
    celular: '',
    cargo: '',
    departamento: '',
    data_admissao: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleReload = () => {
    window.location.reload();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/cadastros', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        email: '',
        cpf: '',
        rg: '',
        data_nascimento: '',
        cep: '',
        celular: '',
        cargo: '',
        departamento: '',
        data_admissao: '',
        senha: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="number" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} />
      <input type="number" name="rg" placeholder="RG" value={formData.rg} onChange={handleChange} />
      <input type="date" name="data_nascimento"  value={formData.data_nascimento} onChange={handleChange} />
      <input type="number" name="cep" placeholder="CEP" value={formData.cep} onChange={handleChange} />
      <input type="number" name="celular" placeholder="Telefone" value={formData.celular} onChange={handleChange} />
      <input type="text" name="cargo" placeholder="Cargo" value={formData.cargo} onChange={handleChange} />
      <input type="text" name="departamento" placeholder="Departamento" value={formData.departamento} onChange={handleChange} />
      <input type="date" name="data_admissao"  value={formData.data_admissao} onChange={handleChange} />
      <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} />
      <button onClick={handleReload} type="submit">Salvar</button>
    </form>
  );
};

export default CadastroForm;
