//Cadastro
import React from "react";
import CadastroForm from "../Components/CadastroForm";
import TabelaCadastro from "../Components/TabelaCadastro";
const Cadastro = () => {
  return (
    <>
      <div>
        <h2>Cadastre-se </h2>
        <CadastroForm />
        <TabelaCadastro />
      </div>
    </>
  );
};

export default Cadastro;
