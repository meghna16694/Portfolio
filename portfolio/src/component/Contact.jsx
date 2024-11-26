import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
    <div className="container contact" id='Contact'>
    <h1>CONTACT ME</h1>

    <div className="contact-icon"
     data-aos = "zoom-in-up"
     data-aos-duration = "1000"
     >

      <a href='https://www.instagram.com/' className="items">
      <FaInstagramSquare className='icons'/>
      </a>
      <a href='https://www.facebook.com'
       className="items">
      <CiFacebook className='icons' />
      </a>
      <a href='https://www.linkedin.com' className="items">
      <FaLinkedin className='icons'/>
      </a>
      <a href='https://www.twitter.com' className="items">
      <FaTwitterSquare className='icons' />
      </a>
      <a href='https://www.github.com'
      className="items">
      <FaGithub className='icons' />
      </a>
      <a href='mailto:meghnagondaliya15@gmail.com'  className="items">
      <SiGmail className='icons' />
      </a>
    </div>
    </div>
   

    </>
  )
}

export default Contact