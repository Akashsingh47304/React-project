import { useState } from 'react'

import './App.css'
import TodoForm from './components/TodoForm'
import Todos from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Learn about redux toolkit</h1>
      <TodoForm/>
      <Todos />

     
    </>
  )
}

export default App
