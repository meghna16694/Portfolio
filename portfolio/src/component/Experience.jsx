import React from 'react'
import img2 from '../component/img2.jpg';
import img3 from '../component/img3.avif';
import img4 from '../component/img4.webp';

const Experience = () => {
  return (
    <>
    <div className="container ex" id='Experience'>
      <h1>EXPERIENCE</h1>

      <div className="ex-items"
       data-aos = "zoom-in"
       data-aos-duration = "1000"
       >
   
        <div className="left">
          <img src={img2} alt="" />
        </div>

        <div className="right">
        <h4>Strong foundation in <span style={{color:"yellowgreen"}}> frontend technologies </span> with hands-on experience building responsive, user-friendly web interfaces.</h4>
        </div>
      
      </div>

      <div className="ex-items"
       data-aos = "zoom-in"
       data-aos-duration = "1000"
       >

        <div className="left">
          <img src={img3}alt="" />
        </div>

        <div className="right">
        <h4>Knowledge of backend technologies,<span style={{color:"yellowgreen"}}> including APIs and server-side development </span> with Node.js.</h4>
        </div>
      
      </div>
      <div className="ex-items"
       data-aos = "zoom-out"
       data-aos-duration = "1000"
       >

<div className="left">
  <img src={img4} alt="" />
</div>

<div className="right">
<h4> <span style={{color:"yellowgreen"}}>Practical experience </span> working on full-stack projects, demonstrating my ability to handle end-to-end development.</h4>
</div>

</div>
    </div>
    </>
  )
}

export default Experience