import React, { useState } from 'react'
import axios from './axios.js'

const App = () => {
  const [data, setData] = useState("")
  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/`, {
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
