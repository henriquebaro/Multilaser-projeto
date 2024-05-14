import React from "react";
// import Pedidos_form from '../Components/Pedidos_form';
import Tabela_pedidos from '../Components/Pedidos_tabela';
function Pedidos(){
    return(
        <>
        <h1> adicione um novo pedido</h1>
         {/* <Pedidos_form/>  */}
        <Tabela_pedidos/>
        
        </>
    )
}
export default Pedidos