import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Experience from './component/Experience'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Aos from 'aos'
import "aos/dist/aos.css"

function App() {
    useEffect(()=>{
     Aos.init()
    },[])
 return (
  
      <>
      <Navbar/>
      <div className="container">
      <Home/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>

      </div>
          </>
)
}

export default App