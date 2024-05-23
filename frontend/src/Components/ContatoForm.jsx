import React, { useState } from 'react';
import axios from 'axios';
import '../css/contato.css';
import Imagem from '../Imagens/imagem_p_contato.png';

const Contatoform = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        cnpj: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.nome || !formData.email || !formData.cnpj) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        try {
            await axios.post('http://localhost:3001/contato', formData);
            alert('Cadastro criado com sucesso!');
            // Limpar o formulário após o envio bem-sucedido
            setFormData({
                nome: '',
                email: '',
                cnpj: ''
            });
        } catch (error) {
            console.error('Erro ao criar cadastro:', error);
            alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contato-form-container">
            <img src={Imagem} alt="Imagem" className="form-image" />
            <div className='contato-form'>
                <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} className="input-field" />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input-field" />
                <input type="number" name="cnpj" placeholder="CNPJ" value={formData.cnpj} onChange={handleChange} className="input-field" />
            </div>
            <div className='form-button'>
                <button type="submit" className="submit-button">Salvar</button>
            </div>
        </form>
    );
};

export default Contatoform;
