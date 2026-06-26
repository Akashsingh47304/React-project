import React from 'react'

 export default function FoodCards({Food}) {
  return (
     <div
      className="overflow-hidden rounded-2xl
                 bg-white/10
                 backdrop-blur-md
                 border border-white/20
                 shadow-xl
                 hover:scale-105
                 transition-all duration-300"
    >
      <div className="relative">
        <img
          src={Food.url}
          alt={Food.name}
          className="w-full h-56 object-cover"
        />
      </div>

      <div className="p-4 text-white">
        <h3 className="text-xl font-bold">{Food.name}</h3>
        <p className="text-gray-200">⭐ {Food.rating}</p>
      </div>
    </div>
  )
}
