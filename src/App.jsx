import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Service from './components/services/Service'
import About from './components/about/About'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Navbar/>
        <About/>
        <Service/>
    </>
  )
}

export default App
