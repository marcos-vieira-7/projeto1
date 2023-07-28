import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from './Titulo.jsx'
import Produto from './Produto.jsx'
import Task from './Task.jsx'
import zelda from './assets/zelda2.jpg';
import luck from './assets/luck.jpg';
import ListaTask from './ListaTask.jsx';
import {Route, Routes, Link} from "react-router-dom"


function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="cardPrincipal">
      <h2>Todo App2</h2>

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
      <Route path="/tarefas" element={<Titulo/>} />
      <Route path="/produtos" element={<Produto/>} />
    </Routes>

    </div>
  )
}

export default App
