import React from "react";
import Fornecedor_form from "../Components/Fornecedor_form";
import TabelaClientes from "../Components/Fornecedor_tabela";

const Fornecedores = () => {
  return (
    <>
      <div>
        <h2>Fornecedores    </h2>
    <Fornecedor_form/>
    <TabelaClientes/>
      </div>
    </>
  );
};

export default Fornecedores;
