//Cadastro
import React from "react";
import CadastroForm from "../Components/CadastroForm";
import TabelaCadastro from "../Components/TabelaCadastro";
import Rodape from "../Components/Rodape";






const Cadastro   = () => {
  return (
    <>
    <br/>
    
    <center>
      <h1>Cadastro dos funcionários</h1>
    </center>
    <br/>
      <CadastroForm />
      <TabelaCadastro/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Rodape/>

    
    </>
  );
};

export default Cadastro;
