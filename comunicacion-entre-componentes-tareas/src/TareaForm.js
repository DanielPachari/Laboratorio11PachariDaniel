import React, { useState } from 'react';

function TareaForm({ agregarTarea, error }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea(texto);
    setTexto("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Añadir tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Agregar Tarea</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default TareaForm;
