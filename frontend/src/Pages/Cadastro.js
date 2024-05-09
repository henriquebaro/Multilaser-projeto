//Cadastro
import React from "react";
import CadastroForm from "../Components/CadastroForm";
import TabelaCadastro from "../Components/TabelaCadastro";
import '../css/cadastrofunc.css'

const Cadastro = () => {
  
  return (
    <>
      <div>
       
       
             <center>
            <h2 className="h2">CADASTRE-SE</h2>
             </center>
        
      
      
             <CadastroForm />
           <br/>
           <br/>
     
        <TabelaCadastro />
      </div>
    </>
  );
};

export default Cadastro;
