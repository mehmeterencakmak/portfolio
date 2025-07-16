import React from 'react';
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg"
import img from "../../assets/img.jpeg"


function About() {
  return (
    <div id='about' className='about' >
        <div className="about-title">
          <h1>About Me</h1>
          {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img style={{width:"400px"}} src={img} alt="" />
          </div>
          <div className='about-right'>
            <div className="about-para">
              <p>Hi! I'm Eren Çakmak, a Software Engineering student at Haliç University, having completed my second year. I'm passionate about web technologies and actively developing projects using HTML, CSS, JavaScript, React, and Python. </p>
              <p>I'm always eager to learn and improve myself by exploring new tools and technologies. Currently, I’m focusing on frontend development and aiming to become a professional in this field. My goal is to create modern, high-performance, and user-friendly software solutions.</p>
            </div>
            <div className="about-skills">
              <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
              <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}} /></div>
              <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}} /></div>
              <div className="about-skill"><p>Python</p><hr style={{width:"50%"}} /></div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>1+</h1>
            <p>HAPPY CLİENTS</p>
          </div>
        </div>
    </div>
  )
}

export default About