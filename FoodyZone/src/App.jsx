import { useState } from 'react'
import Navigation from './Component/Navigation'
import bgImage from "./assets/bg.png"
import { Route,Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
   <Navigation/>
    
   <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/lunch" element={<h1>Lunch</h1>} />
        <Route path="/breakfast" element={<h1>Breakfast</h1>} />
        <Route path="/dinner" element={<h1>Dinner</h1>} />
      </Routes>

    
   </div>
    </>
  )
}

export default App
