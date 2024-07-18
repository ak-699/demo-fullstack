import React, { useState } from 'react'
import axios from "axios"

const App = () => {
  const [data, setData] = useState("")
  const API_URI = import.meta.env.VITE_API_URI
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URI}/`, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      })
      console.log(response)
      setData(response.data.message);
    } catch (error) {
      setData("Error connecting to server")
      console.log(error);
    }
  }
  return (
    <div>
      <p>hello, i am abhishek</p>
      <button onClick={fetchData}>click me</button>
      <p>{data}</p>
    </div>
  )
}

export default App
