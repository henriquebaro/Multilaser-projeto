// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Tabela_pedidos = () => {
//     const [pedidos, setPedidos] = useState([]);

//     useEffect(() => {
//       const fetchPedidos = async () => {
//         const response = await axios.get('http://localhost:3001/produtos');
//         setPedidos(response.data);
//       };
//       fetchPedidos();
//     }, []);
  
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Cliente</th>
//             <th>Produto</th>

      
//           </tr>
//         </thead>
//         <tbody>
//           {pedidos.map(pedido => (
//             <tr key={pedido.id_pedidos}>
//               <td>{pedido.id_pedidos}</td>
//               <td>{pedido.nome}</td>
//               <td>{pedido.nomeProduto}</td>
          
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }

// export default Tabela_pedidos;