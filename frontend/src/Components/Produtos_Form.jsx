import React, { useState } from 'react';
import axios from 'axios';
const Produtos_form = () => {
    const [formData, setFormData] = useState({
      nomeProduto: '',
      quantidade: '',
      descricao: '',
      preco: '',
      
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
        await axios.post('http://localhost:3001/produtos', formData);
        alert('Produto adicionado com sucesso');
        // Limpar o formulário após o envio bem-sucedido
        setFormData({
          nomeProduto: '',
          quantidade: '',
          descricao: '',
          preco: ''
        });
      } catch (error) {
        console.error('Erro ao adicionar o produto:', error);
        alert('erro ao adicionar o produto acionar o admin');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="nomeProduto" placeholder="Nome" value={formData.nomeProduto} onChange={handleChange} />
        <input type="number" name="quantidade" placeholder="QTD" value={formData.quantidade} onChange={handleChange} />
        <input type="text" name="descricao" placeholder="descricao produto" value={formData.descricao} onChange={handleChange} />
        <input type="number" name="preco" placeholder="preco" value={formData.preco} onChange={handleChange} />
       
        <button onClick={handleReload} type="submit">Salvar</button>
      </form>
    );
  };
  
  export default Produtos_form;
  