import React from 'react';

function Filtros({ filtrarTareas, ordenarTareasAscendente, ordenarTareasDescendente }) {
  return (
    <div className="filter-buttons">
      <button onClick={() => filtrarTareas("Todas")}>Todas</button>
      <button onClick={() => filtrarTareas("Pendientes")}>Pendientes</button>
      <button onClick={() => filtrarTareas("Completadas")}>Completadas</button>
      <button onClick={ordenarTareasAscendente}>Ordenar Ascendente</button>
      <button onClick={ordenarTareasDescendente}>Ordenar Descendente</button>
    </div>
  );
}

export default Filtros;

