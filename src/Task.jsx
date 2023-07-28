import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './myStyle.css';
import axios from 'axios';
import api from "./services/api";


function Task({ descricao }) {
  // Dados dos campos do formulário
  const [dados, setDados] = useState({
    title: ''
  });
  const valueInput = (e) => setDados({ ...dados, [e.target.name]: e.target.value });

  //lista tasks
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    api.get("/tasks") // Altere a URL para buscar todas as tarefas
      .then((response) => setTasks(response.data))
      .catch((err) => {
        console.error("Ops! Ocorreu um erro: " + err);
      });
  }, []);

  // Executar a função quando o usuário clicar no botão do formulário
  const addTask = async (e) => {
    // Bloquear o recarregamento da página
    e.preventDefault();

    // Criar a constante com os dados do cabeçalho
    const headers = {
      'headers': {
        // Indicar que será enviado os dados em formato de objeto
        'Content-Type': 'application/json'
      }
    };

    // Fazer a requisição para o servidor utilizando axios, indicando o método da requisição, o endereço, enviar os dados do formulário e o cabeçalho
    await axios.post('http://localhost:3000/tasks', dados, headers)
      .then((response) => { // Acessa o then quando a API retornar status 200
        // Atribuir a mensagem no state message
        //console.log(response.data.mensagem);
        // setMessage(response.data.nomeTarefa);
        // Limpar os dados do state e os dados dos campos do formulário
        setTasks([...tasks, response.data]);
      }).catch((err) => { // Acessa o catch quando a API retornar erro
        // Atribuir a mensagem no state message
        //console.log(err.response.data.mensagem);
        if (err.response) {
          // setMessage(err.response.data.nomeTarefa);
        } else {
          // setMessage("Erro: Tente novamente mais tarde ou entre contato com ...!");
        }
      });
  }

  // const [count, setCount] = useState(0)
  return (
    <div className="card">
      <form onSubmit={addTask}>
        <input type="text" className="inputText" name="title" placeholder="Nome Tarefa"
        onChange={valueInput}/>
        <button type="submit" className="btnAdd">Adicionar</button>
      </form>

      <h2>Lista de Tasks</h2>
      {tasks.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
    </div>
  )

}

export default Task