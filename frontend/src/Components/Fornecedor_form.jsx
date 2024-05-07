import React, { useState } from 'react';
import axios from 'axios';

const Fornecedor_form = () => {
  const [formData, setFormData] = useState({
    nome_empresa: '',
    email: '',
    telefone: '',
    cep: '',
    cnpj: ''
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
      await axios.post('http://localhost:3001/fornecedores', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome_empresa: '',
    email: '',
    telefone: '',
    cep: '',
    cnpj: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome_empresa" placeholder="Empresa" value={formData.nome_empresa} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="number" name="cnpj" placeholder="CNPJ" value={formData.cnpj} onChange={handleChange} />
      <input type="number" name="cep" placeholder="CEP" value={formData.cep} onChange={handleChange} />
      <input type="number" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
     <button onClick={handleReload} type="submit">Salvar</button>
    </form>
  );
};

export default Fornecedor_form;
