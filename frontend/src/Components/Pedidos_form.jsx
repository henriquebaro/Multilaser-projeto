// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Pedidos_form({ tipo, onBuscar }) {
//   const [idCliente, setIdCliente] = useState('');
//   const [idProduto, setIdProduto] = useState('');

//   const handleAdicionarPedido = async () => {
//     try {
//       await axios.post('http://localhost:3000/pedidos', {
//         id_cliente: idCliente,
//         id_produto: idProduto
//       });
//       alert('Pedido adicionado com sucesso');
//     } catch (error) {
//       console.error('Erro ao adicionar pedido:', error);
//       alert('Erro ao adicionar pedido');
//     }
//   };

//   return (
//     <div>
//       <input type="text" placeholder="ID Cliente" value={idCliente} onChange={(e) => setIdCliente(e.target.value)} />
//       <input type="text" placeholder="ID Produto" value={idProduto} onChange={(e) => setIdProduto(e.target.value)} />
//       <button onClick={handleAdicionarPedido}>Adicionar Pedido</button>
//     </div>
//   );
// }

//   export default Pedidos_form;
  