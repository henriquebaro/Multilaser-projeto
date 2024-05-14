import React from "react";
import Fornecedor_form from "../Components/Fornecedor_form";
import TabelaClientes from "../Components/Fornecedor_tabela";
import '../css/fornecedorform.css'

const Fornecedores = () => {
  return (
    <>
      <div>
        <center>
          <h2 className="h2">FORNECEDORES </h2>
        </center>
        
    <Fornecedor_form/>
    <TabelaClientes/>
      </div>
    </>
  );
};

export default Fornecedores;
