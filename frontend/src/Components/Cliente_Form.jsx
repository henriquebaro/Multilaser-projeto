import React, { useState } from 'react';
import axios from 'axios';

const ClienteForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    data_nascimento: '',
    cep: '',
    celular: '',
    senha: ''
  });
  const handleReload = () => {
    window.location.reload();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/clientes', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        email: '',
        cpf: '',
        data_nascimento: '',
        cep: '',
        celular: '',
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
      <input type="date" name="data_nascimento"  value={formData.data_nascimento} onChange={handleChange} />
      <input type="number" name="cep" placeholder="CEP" value={formData.cep} onChange={handleChange} />
      <input type="number" name="celular" placeholder="Telefone" value={formData.celular} onChange={handleChange} />
      <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} />   
      <button onClick={handleReload} type="submit">Salvar</button>
    </form>
  );
};

export default ClienteForm;
