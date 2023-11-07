import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';
import './styles.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");
  const [error, setError] = useState(null);

  const agregarTarea = (texto) => {
    if (texto.trim() === "") {
      setError("El texto de la tarea no puede estar en blanco.");
      return;
    }
    if (texto.length > 25) {
      setError("El texto de la tarea es demasiado largo. Debe ser menor a 25 caracteres.");
      return;
    }

    const nuevaTarea = { texto, completada: false, fecha: new Date() };
    setTareas([...tareas, nuevaTarea]);
    setError(null);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    if (nuevoTexto.trim() === "") {
      setError("El texto de la tarea no puede estar en blanco.");
      return;
    }
    if (nuevoTexto.length > 25) {
      setError("El texto de la tarea es demasiado largo. Debe ser menor a 25 caracteres.");
      return;
    }

    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
    setError(null);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  const ordenarTareasAscendente = () => {
    const tareasOrdenadas = [...tareas].sort((a, b) => a.fecha - b.fecha);
    setTareas(tareasOrdenadas);
  };

  const ordenarTareasDescendente = () => {
    const tareasOrdenadas = [...tareas].sort((a, b) => b.fecha - a.fecha);
    setTareas(tareasOrdenadas);
  };

  let tareasFiltradas = tareas;
  if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <div className="filter-row">
        <TareaForm agregarTarea={agregarTarea} error={error} />
        <Filtros
          filtrarTareas={filtrarTareas}
          ordenarTareasAscendente={ordenarTareasAscendente}
          ordenarTareasDescendente={ordenarTareasDescendente}
        />
      </div>
      <ListaTareas
        tareas={tareasFiltradas}
        eliminarTarea={eliminarTarea}
        editarTarea={editarTarea}
        toggleCompletada={toggleCompletada}
      />
    </div>
  );
}

export default App;


