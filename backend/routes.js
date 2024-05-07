const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para listar todos os registros
router.get('/cadastros', (req, res) => {
  connection.query('SELECT * FROM cadastro_funcionarios', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo id_funcionarios
router.get('/cadastros/:id_funcionarios', (req, res) => {
  const { id_funcionarios } = req.params;
  connection.query('SELECT * FROM cadastro_funcionarios WHERE id_funcionarios = ?', [id_funcionarios], (err, results) => {
    if (err) {
      console.error('Erro ao buscar o registro:', err);
      res.status(500).json({ error: 'Erro ao buscar o registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro não encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Rota para criar um novo registro
router.post('/cadastros', (req, res) => {
  const { nome, email, cpf, rg, data_nascimento,cep,celular,cargo,departamento,data_admissao, senha } = req.body;
  connection.query('INSERT INTO cadastro_funcionarios (nome, email, cpf,rg, data_nascimento,cep , celular, cargo, departamento, data_admissao) VALUES (?, ?, ?, ?, ?, ?,?,?,?,?)', 
    [nome, email, cpf, rg, data_nascimento,cep,celular,cargo,departamento,data_admissao, senha], (err, result) => {
    if (err) {
      console.error('Erro ao criar o registro:', err);
      res.status(500).json({ error: 'Erro ao criar o registro' });
      return;
    }
    res.status(201).json({ message: 'Registro criado com sucesso', id_funcionarios: result.insertid_funcionarios });
  });
});

// Rota para atualizar um registro existente pelo id_funcionarios
router.put('/cadastros/:id_funcionarios', (req, res) => {
  const { id_funcionarios } = req.params;
  const { nome, email, cpf, rg, data_nascimento,cep,celular,cargo,departamento,data_admissao, senha } = req.body;
  connection.query('UPDATE cadastro_funcionarios SET nome = ?, email = ?, cpf = ?, rg = ?, data_nascimento = ?, cep = ?,celular = ?, cargo = ?, departamento = ?, data_admissao = ?, WHERE id_funcionarios = ?', 
    [nome, email, cpf, rg, data_nascimento,cep,celular,cargo,departamento,data_admissao,senha, id_funcionarios], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar o registro:', err);
      res.status(500).json({ error: 'Erro ao atualizar o registro' });
      return;
    }
    res.json({ message: 'Registro atualizado com sucesso' });
  });
});

// Rota para excluir um registro pelo id_funcionarios
router.delete('/cadastros/:id_funcionarios', (req, res) => {
  const { id_funcionarios } = req.params;
  connection.query('DELETE FROM cadastro_funcionarios WHERE id_funcionarios = ?', [id_funcionarios], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});
/////////////// tabela produtos ////////////////////////////
router.get('/produtos', (req, res) => {
  connection.query('SELECT * FROM produtos', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo id_funcionarios
router.get('/produtos/:idProdutos', (req, res) => {
  const { id_funcionarios } = req.params;
  connection.query('SELECT * FROM produtos WHERE idProdutos = ?', [idProdutos], (err, results) => {
    if (err) {
      console.error('Erro ao buscar o registro:', err);
      res.status(500).json({ error: 'Erro ao buscar o registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro não encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Rota para criar um novo registro
router.post('/produtos', (req, res) => {
  const { nomeProduto, quantidade, descricao, preco  } = req.body;
  connection.query('INSERT INTO produtos ( nomeProduto, quantidade, descricao, preco) VALUES (?, ?, ?, ?)', 
    [ nomeProduto, quantidade, descricao, preco], (err, result) => {
    if (err) {
      console.error('Erro ao criar o registro:', err);
      res.status(500).json({ error: 'Erro ao criar o registro' });
      return;
    }
    res.status(201).json({ message: 'Registro criado com sucesso', idProdutos: result.insertidProdutos });
  });
});

// Rota para atualizar um registro existente pelo id_funcionarios
router.put('/produtos/:idProdutos', (req, res) => {
  const { idProdutos } = req.params;
  const {nomeProduto, quantidade, descricao, preco } = req.body;
  connection.query('UPDATE produtos SET nomeProduto = ?, quantidade = ?, descricao = ?, preco = ?, WHERE idProdutos = ?', 
    [nomeProduto, quantidade, descricao, preco, idProdutos], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar o registro:', err);
      res.status(500).json({ error: 'Erro ao atualizar o registro' });
      return;
    }
    res.json({ message: 'Registro atualizado com sucesso' });
  });
});

// Rota para excluir um registro pelo id_funcionarios
router.delete('/produtos/:idProdutos', (req, res) => {
  const { idProdutos } = req.params;
  connection.query('DELETE FROM produtos WHERE idProdutos = ?', [idProdutos], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

module.exports = router;
