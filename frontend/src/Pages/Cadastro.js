//Cadastro
import React, { useState } from "react";
import CadastroForm from "../Components/CadastroForm";
import TabelaCadastro from "../Components/TabelaCadastro";
import '../css/cadastrofunc.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Cadastro ()  {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  
  return (
    <>  
    <CadastroForm/>
    <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><TabelaCadastro/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     
    </>
  );
};

export default Cadastro;
