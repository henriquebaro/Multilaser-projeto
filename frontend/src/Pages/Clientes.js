import React from "react";
import ClienteForm from "../Components/Cliente_Form";
import TabelaClientes from "../Components/Cliente_Tabela";
import '../css/cadastroclientes.css'

const Clientes = () => {
  return (
    <>
      <div>
        <center>
          <h2 className="h2">CADASTRE-SE</h2>
        </center>
        
     <ClienteForm/>
     <TabelaClientes/>
      </div>
    </>
  );
};

export default Clientes;