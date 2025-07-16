import React from 'react'
import "./Hero.css"
import profile_img from "../../../assets/profile_img.svg"
import profile_img2 from "../../../assets/profile_img2.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = ()=> {
  return (
    <div id='home' className='hero'>
        
    
        <img src={profile_img2}  alt="" />
        <h1><span>I'm Eren ÇAKMAK,</span> frontend developer based in Türkiye.</h1>
        <p>I am Eren Çakmak, a 2nd-year Software Engineering student with a strong passion for technology and development. </p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero