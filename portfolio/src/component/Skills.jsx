import React from 'react'
import img5 from '../component/img5.png';
import img6 from '../component/img6.jpg';
import img7 from '../component/img7.jpg';
import img8 from '../component/img8.png';
import img9 from '../component/img9.png';
import img10 from '../component/img10.png';


const Skills = () => {
  return (
    <>
    <div className="container skills" id='Skills'>
     <h1>SKILLS</h1>
     <div className="items">
      <div className="item"
       data-aos = "flip-left"
       data-aos-duration = "1000"
       >
        <img src={img5} alt="" />
        <h3>HTML</h3>
      </div>
   

    
      <div className="item"
       data-aos = "flip-left"
       data-aos-duration = "1000"
       >
        <img src={img6} alt="" />
        <h3>CSS</h3>
      </div>
    

     
      <div className="item"
       data-aos = "flip-left"
       data-aos-duration = "1000"
       >
        <img src={img7} alt="" />
        <h3>JS</h3>
      </div>
   

    
      <div className="item"
       data-aos = "flip-left"
       data-aos-duration = "1000"
       >
        <img src={img8} alt="" />
        <h3>REACT</h3>
      </div>
     
     
      <div className="item"
       data-aos = "flip-left"
       data-aos-duration = "1000"
       >
        <img src={img9} alt="" />
        <h3>NODE.JS</h3>
      </div>
     

    
      <div className="item"
       data-aos = "flip-left"
       data-aos-duration = "1000"
       >
        <img src={img10} alt="" />
        <h3>FIREBASE</h3>
      </div>
     

     </div>

    




    </div>
    </>
  )
}

export default Skills