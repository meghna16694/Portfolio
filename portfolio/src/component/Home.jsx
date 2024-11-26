import React, { useEffect,useRef } from 'react'
import Typed from 'typed.js'



const Home = () => {
  const typedRef = useRef(null)

  useEffect(()=>{
    const options = {
      strings:["Welcome to my Profile","I'm Meghna Patel","I'm Full stack developer",],
      typeSpeed:50,
      backSpeed:50,
      loop:true,
    }
    const typed = new Typed(typedRef.current,options)

    return () =>{
      typed.destroy()
    }
  },[])
  return (
    <>
    <div className="container home" id='Home'>
      <div className="left" 
        data-aos = "fade-up-right"
        data-aos-duration = "1000"
        >
        <h1 ref={typedRef}>

        </h1>
        <a href="" className="btn btn-outline-warning my-3">Download Resume</a>

      </div>
      <div className="right">
       <div className="img"
        data-aos = "fade-up-left"
        data-aos-duration = "1000"
        >
       <img src="/assests/company/mine/mine.avif" alt="mine" />
       </div>
       
      </div>

    </div>
    </>
  )
}

export default Home