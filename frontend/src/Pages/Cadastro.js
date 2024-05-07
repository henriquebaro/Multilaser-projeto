//Cadastro
import React from "react";
import CadastroForm from "../Components/CadastroForm";
import TabelaCadastro from "../Components/TabelaCadastro";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
const Cadastro = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <div>
        <h2>Página Cadastro</h2>
      
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody> 
             <CadastroForm />
           
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        <TabelaCadastro />
      </div>
    </>
  );
};

export default Cadastro;
