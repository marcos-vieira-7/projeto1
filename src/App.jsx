import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from './Titulo.jsx'
import Task from './Task.jsx'
import zelda from './assets/zelda2.jpg';
import luck from './assets/luck.jpg';
import ListaTask from './listaTask.jsx';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className='cardPrincipal'>
      <h2>Todo App</h2>
    <Titulo />
    <ListaTask />
    </div>
  )
}

export default App
