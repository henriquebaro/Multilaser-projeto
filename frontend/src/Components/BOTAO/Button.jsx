import React from 'react';
import { Button } from 'react-bootstrap'; // Supondo que você esteja usando React Bootstrap

const EditButton = ({ onClick }) => {
  return (
    <Button variant="warning" onClick={onClick}>
      Editar
    </Button>
  );
};

export default EditButton;
