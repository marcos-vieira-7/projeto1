import { useState } from 'react';
import './App.css';
import Produto from './Produto.jsx';
import Task from './Task.jsx';
import Login from './Login.jsx';
import { Route, Routes, Link } from "react-router-dom";


function App() {
  const [estaLogado, setEstaLogado] = useState(true);
  let Conteudo;
  
  if(!estaLogado){
    Conteudo = 
    <div>
      <Login />;
    </div>
  }else {
    Conteudo = 
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

      {Conteudo}

    </div>
  )
}

export default App
