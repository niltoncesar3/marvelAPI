import './App.css'
import { useState, useEffect } from 'react'

import axios from 'axios'




function App() {

  const [url, setUrl] = useState([])

  const getUrl = async() => {
    try {
      const response = await axios.get("c51bdf985b2fdf7e4eaec6454719e13d")

      console.log(response)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUrl()
  },[])

  

  return (
    <div>
      <h1>React</h1>


    </div>
  )
}

export default App
