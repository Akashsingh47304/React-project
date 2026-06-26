import { useState } from 'react'
import Navigation from './Component/Navigation'
import bgImage from "./assets/bg.png"
import { Route,Routes } from 'react-router-dom'
import FoodCards from './Component/FoodCards'


function App() {
  const [count, setCount] = useState(0)

  const Food=[
    {id:1,name:"Pizza",rating:9.2,url:"https://picsum.photos/300/400"},
    {id:2,name:"burger",rating:8.4,url:"https://picsum.photos/300/400"},
    {id:3,name:"Veg-wrap",rating:9.2,url:"https://picsum.photos/300/400"},
    {id:4,name:"Matcha",rating:9.8,url:"https://picsum.photos/300/400"},
  ]
    const [searchQuery, setSearchQuery] = useState("");
  

  return (
    <>
   <Navigation/>
    
   <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Routes>
        <Route path="/" element={<h1></h1>} />
        <Route path="/lunch" element={<h1>L</h1>} />
        <Route path="/breakfast" element={<h1></h1>} />
        <Route path="/dinner" element={<h1></h1>} />
      </Routes>
      
     

      <div className="flex flex-wrap justify-center gap-6 p-6">
  {Food
    .filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .map((food) => (
      <div key={food.id} className="w-full sm:w-[45%] lg:w-[30%]">
        <FoodCards Food={food} />
      </div>
    ))}
</div>

    
   </div>
    </>
  )
}


export default App
