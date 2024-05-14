import React, { useState } from "react";

function Pedidos_form({ tipo, onBuscar }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleBuscar = () => {
    onBuscar(id);
  };

  return (
    <div>
      <label htmlFor={`id_${tipo}`}>ID {tipo.charAt(0).toUpperCase() + tipo.slice(1)}:</label>
      <input type="number" id={`id_${tipo}`} value={id} onChange={handleChange} />
      <button onClick={handleBuscar}>Buscar {tipo.charAt(0).toUpperCase() + tipo.slice(1)}</button>
    </div>
  );
}

export default Pedidos_form;
