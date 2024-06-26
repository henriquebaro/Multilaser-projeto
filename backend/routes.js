const express = require('express');
const connection = require('./db');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
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
  const { nome, email, cpf, rg, data_nascimento, cep, celular, cargo, departamento, data_admissao, senha } = req.body;
  connection.query('INSERT INTO cadastro_funcionarios (nome, email, cpf,rg, data_nascimento,cep , celular, cargo, departamento, data_admissao, senha) VALUES (?, ?, ?, ?, ?,?,?,?,?,?,?)',
    [nome, email, cpf, rg, data_nascimento, cep, celular, cargo, departamento, data_admissao, senha], (err, result) => {
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
  const { nome, email, cpf, rg, data_nascimento, cep, celular, cargo, departamento, data_admissao, senha } = req.body;
  connection.query('UPDATE cadastro_funcionarios SET nome = ?, email = ?, cpf = ?, rg = ?, data_nascimento = ?, cep = ?,celular = ?, cargo = ?, departamento = ?, data_admissao = ?, senha = WHERE id_funcionarios = ?',
    [nome, email, cpf, rg, data_nascimento, cep, celular, cargo, departamento, data_admissao, senha, id_funcionarios], (err, result) => {
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
  const { idProdutos } = req.params;
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
  const { nomeProduto, quantidade, descricao, preco } = req.body;
  connection.query('INSERT INTO produtos ( nomeProduto, quantidade, descricao, preco) VALUES (?, ?, ?, ?)',
    [nomeProduto, quantidade, descricao, preco], (err, result) => {
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
  const { nomeProduto, quantidade, descricao, preco } = req.body;
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
/////////////////////// clientes ////////////////////////////////////////
router.get('/clientes', (req, res) => {
  connection.query('SELECT * FROM cadastro_clientes', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo id_funcionarios
router.get('/clientes/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM cadastro_clientes WHERE id = ?', [id], (err, results) => {
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
router.post('/clientes', (req, res) => {
  const { nome, email, cpf, data_nascimento, cep, celular, senha } = req.body;
  connection.query('INSERT INTO cadastro_clientes (nome, email, cpf, data_nascimento,cep , celular) VALUES (?, ?, ?, ?, ?,?)',
    [nome, email, cpf, data_nascimento, cep, celular, senha], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertid });
    });
});

// Rota para atualizar um registro existente pelo id_funcionarios
router.put('/clientes/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email, cpf, data_nascimento, cep, celular, senha } = req.body;
  connection.query('UPDATE cadastro_clientes SET nome = ?, email = ?, cpf = ?,   data_nascimento = ?, cep = ?,celular = ?, cargo = ?, WHERE id = ?',
    [nome, email, cpf, data_nascimento, cep, celular, senha, id], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo id_funcionarios
router.delete('/clientes/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM cadastro_clientes WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});
//////////////////////////////////// cadastro das fornecedoras //////////////////////////////////
router.get('/fornecedores', (req, res) => {
  connection.query('SELECT * FROM cadastro_fornecedores', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo id_funcionarios
router.get('/fornecedores/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM cadastro_fornecedores WHERE id_fornecedor = ?', [id_fornecedor], (err, results) => {
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
router.post('/fornecedores', (req, res) => {
  const { nome_empresa, email, cnpj, telefone, cep, } = req.body;
  connection.query('INSERT INTO cadastro_fornecedores (nome_empresa, email, cnpj, telefone,cep  ) VALUES (?, ?, ?, ?, ?)',
    [nome_empresa, email, cnpj, telefone, cep,], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id_fornecedor: result.insertid_fornecedor });
    });
});

// Rota para atualizar um registro existente pelo id_funcionarios
router.put('/fornecedores/:id_fornecedor', (req, res) => {
  const { id_fornecedor } = req.params;
  const { nome_empresa, email, cnpj, telefone, cep, } = req.body;
  connection.query('UPDATE cadastro_fornecedores SET nome_empresa = ?, email = ?, cnpj = ?,   telefone = ?, cep = ?, WHERE id_fornecedor = ?',
    [nome_empresa, email, cnpj, telefone, cep, id_fornecedor], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo id_funcionarios
router.delete('/fornecedores/:id_fornecedor', (req, res) => {
  const { id_fornecedor } = req.params;
  connection.query('DELETE FROM cadastro_fornecedores WHERE id_fornecedor = ?', [id_fornecedor], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});
/////////////////////////////// pedidos //////////////////////////////////////


// router.post('/pedidos', (req, res) => {
//   const { id, idProdutos } = req.body;
//   connection.query('INSERT INTO pedidos (id, idProduto) VALUES (?, ?)', [id, idProdutos], (err, result) => {
//     if (err) {
//       console.error('Erro ao criar o pedido:', err);
//       res.status(500).json({ error: 'Erro ao criar o pedido' });
//       return;
//     }
//     res.status(201).json({ message: 'Pedido criado com sucesso', id: result.insertId });
//   });
// });
///////////////////////////////// teste ///////////////////////
// Rota para adicionar um pedido
// Rota para criar um novo pedido
router.post('/pedidos', (req, res) => {
  const { id, idProdutos, quantidade, valorTotal } = req.body; // Inclui o campo quantidade
  const values = [[id, idProdutos, quantidade, valorTotal]]; // Adiciona a quantidade nos valores
  connection.query('INSERT INTO pedidos (id, idProdutos, quantidade, valorTotal) VALUES ?',
    [values], (err, result) => {
      if (err) {
        console.error('Erro ao criar o pedido:', err);
        res.status(500).json({ error: 'Erro ao criar o pedido' });
        return;
      }
      res.status(201).json({ message: 'Pedido criado com sucesso', id: result.insertId });

    });
});

// Rota para atualizar um registro existente pelo id_funcionarios
router.post('/pedidosUpdate/', (req, res) => {
  const { idProdutos } = req.params;
  const { quantidade } = req.body;
  connection.query('UPDATE produtos SET quantidade = (quantidade - ?) WHERE idProdutos = ?',
    [quantidade, idProdutos], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

router.get('/pedidos', (req, res) => {
  connection.query('SELECT * FROM pedidos', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

router.delete('/pedidos/:id_pedido', (req, res) => {
  const { id_pedido } = req.params;
  connection.query('DELETE FROM pedidos WHERE id_pedido = ?', [id_pedido], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});
router.post('/pedidos', async (req, res) => {
  const { id, idProdutos, quantidade, valorTotal } = req.body;

  try {
    // Inicia uma transação
    await connection.beginTransaction();

    // Adiciona o pedido na tabela de pedidos
    const resultPedido = await connection.query('INSERT INTO pedidos (id, idProdutos, quantidade, valorTotal) VALUES (?, ?, ?, ?)', [id, idProdutos, quantidade, valorTotal]);

    // Atualiza a quantidade disponível do produto na tabela produtos
    await connection.query('UPDATE produtos SET quantidade = quantidade - ? WHERE idProdutos = ?', [quantidade, idProdutos]);

    // Confirma a transação
    await connection.commit();

    res.status(201).json({ message: 'Pedido criado com sucesso', id: resultPedido.insertId });
  } catch (error) {
    // Se ocorrer algum erro, desfaz a transação e retorna o erro
    await connection.rollback();
    console.error('Erro ao criar o pedido:', error);
    res.status(500).json({ error: 'Erro ao criar o pedido' });
  }
});
////////////////////////////////// LOGIN //////////////////////




router.post('/login', (req, res) => {
  const { cpf, senha } = req.body;

  // Consulta para verificar se o usuário existe na tabela
  const query = `SELECT * FROM cadastro_funcionarios WHERE cpf = ? AND senha = ?`;

  // Execute a consulta usando o pool de conexões
  connection.query(query, [cpf, senha], (err, results) => {
    if (err) {
      console.error('Erro ao consultar o banco de dados:', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'CPF ou senha inválido' });
    }

    // Usuário autenticado com sucesso
    res.status(200).json({ message: 'Login bem-sucedido' });
  });
});

////////////////////////////contato///////////////////////////

router.get('/contato', (req, res) => {
  connection.query('SELECT * FROM contato', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo id_funcionarios
router.get('/contato/:IdContato', (req, res) => {
  const { IdContato } = req.params;
  connection.query('SELECT * FROM contato WHERE IdContato = ?', [IdContato], (err, results) => {
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
router.post('/contato', (req, res) => {
  const { nome, email, cnpj } = req.body;
  connection.query('INSERT INTO contato (nome, email, cnpj) VALUES (?, ?, ?)',
    [nome, email, cnpj], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', IdContato: result.insertIdContato });
    });
});

// Rota para atualizar um registro existente pelo id_funcionarios
router.put('/contato/:IdContato', (req, res) => {
  const { IdContato } = req.params;
  const { nome, email, cnpj } = req.body;
  connection.query('UPDATE contato SET nome = ?, email = ?, cnpj = ?, WHERE IdContato = ?',
    [nome, email, cnpj, IdContato], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo id_funcionarios
router.delete('/contato/:IdContato', (req, res) => {
  const { IdContato } = req.params;
  connection.query('DELETE FROM contato WHERE IdContato = ?', [IdContato], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
})
////////////////// pedido fornecedor ///////////////////////////////
router.post('/novopedido', (req, res) => {
  const { id_fornecedor, telefone, valor_total, data_receber } = req.body;
  const values = [id_fornecedor, telefone, valor_total, data_receber];

  connection.query('INSERT INTO pedidos_enviados (id_fornecedor, telefone, valor_total, data_receber) VALUES (?, ?, ?, ?)', values, (err, result) => {
    if (err) {
      console.error('Erro ao criar o pedido:', err);
      res.status(500).json({ error: 'Erro ao criar o pedido' });
      return;
    }
    res.status(201).json({ message: 'Pedido criado com sucesso', id_enviados: result.insertId });
  });
});

// Rota para obter os detalhes de um fornecedor específico
router.get('/fornecedores/:id_fornecedor', (req, res) => {
  const { id_fornecedor } = req.params;

  connection.query('SELECT telefone FROM fornecedores WHERE id_fornecedor = ?', [id_fornecedor], (error, results) => {
    if (error) {
      console.error('Erro ao buscar telefone do fornecedor:', error);
      res.status(500).json({ error: 'Erro ao buscar telefone do fornecedor' });
      return;
    }

    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ error: 'Fornecedor não encontrado' });
    }
  });
});

// Rota para atualizar um pedido
router.post('/pedidosUpdate/:id_fornecedor', (req, res) => {
  const { id_fornecedor } = req.params;
  const { telefone } = req.body;

  connection.query('UPDATE pedidos_enviados SET telefone = telefone - ? WHERE id_fornecedor = ?', [telefone, id_fornecedor], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar o pedido:', err);
      res.status(500).json({ error: 'Erro ao atualizar o pedido' });
      return;
    }
    res.json({ message: 'Pedido atualizado com sucesso' });
  });
});

// Rota para obter todos os pedidos
router.get('/novopedido', (req, res) => {
  connection.query('SELECT * FROM pedidos_enviados', (error, results) => {
    if (error) {
      console.error('Erro ao buscar pedidos:', error);
      res.status(500).json({ error: 'Erro ao buscar pedidos' });
      return;
    }
    res.json(results);
  });
});

// Rota para excluir um pedido
router.delete('/novopedido/:id_enviados', (req, res) => {
  const { id_enviados } = req.params;

  connection.query('DELETE FROM pedidos_enviados WHERE id_enviados = ?', [id_enviados], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o pedido:', err);
      res.status(500).json({ error: 'Erro ao excluir o pedido' });
      return;
    }
    res.json({ message: 'Pedido excluído com sucesso' });
  });
});
