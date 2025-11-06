import React, { useEffect } from 'react'
import Landing from './pages/Landing'
import axios from 'axios'
const App = () => {
  useEffect( () => {
    const fetchData = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/`);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])
  return (
    <div className="min-h-screen w-full">
      <Landing />
    </div>
  )
}
export default App