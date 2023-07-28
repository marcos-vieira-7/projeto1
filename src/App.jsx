import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Produto from './Produto.jsx'
import Task from './Task.jsx'
import Login from './Login.jsx';
import zelda from './assets/zelda2.jpg';
import luck from './assets/luck.jpg';
import ListaTask from './ListaTask.jsx';
import { Route, Routes, Link } from "react-router-dom"


function App() {
  const [estaLogado, setEstaLogado] = useState(false);
  let conteudo;
  
  if(estaLogado == false){
    conteudo = <Login />;
  }else {
    conteudo = 
      <div>
      <nav>
      <ul>
        <li>
          <Link to="/tarefas">Lista Tarefa</Link>
        </li>
        <li>
          <Link to="produtos">Produtos</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/tarefas" element={<Task/>} />
      <Route path="/produtos" element={<Produto/>} />
    </Routes>
    </div>
  }

  return (
    <div>
      <h2>Todo App2</h2>

      {conteudo}

    </div>
  )
}

export default App
