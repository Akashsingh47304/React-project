import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData();
  return (
    <div className="text-center bg-gray-600 text-white p-5 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Github User</h1>
      <p className="text-lg">{data.name}</p>
      <p className="text-md">{data.bio}</p>
    </div>
  )
}

export default Github
export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/bhadreshsuthar");
  return response.json();
}     