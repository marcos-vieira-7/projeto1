import React, {useEffect, useState} from "react";
import axios from 'axios';
import api from "./services/api";

function ListaTask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/tasks") // Altere a URL para buscar todas as tarefas
      .then((response) => setTasks(response.data))
      .catch((err) => {
        console.error("Ops! Ocorreu um erro: " + err);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      {tasks.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
    </div>
  );
}

export default ListaTask