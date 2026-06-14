import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <h1 className="inline-block bg-blue-600 text-white rounded-2xl px-4 py-2 text-4xl">
        Hello, Tailwind
      </h1>
      < Card username ="Akash's solution"/>
    </>
  )
}

export default App
