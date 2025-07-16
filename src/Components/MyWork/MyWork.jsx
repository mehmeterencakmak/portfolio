import React from 'react';
import "./MyWork.css";
// import theme_pattern from "../../assets/theme_pattern.svg"
import theme_pattern from "../../assets/theme_pattern.png"
import arrow_icon from "../../assets/arrow_icon.svg"
import mywork_data from "../../assets/mywork_data"

function MyWork() {
  return (
    <div id='work' className='myWork'>
        <div className="myWrok-title">
            <h1>My latest work</h1>
            <img style={{width: "200px"}} src={theme_pattern} alt="" />
        </div>
        <div className="myWork-container">
            {mywork_data.map((work,index)=>{
              return <img key={index}  src={work.w_img} ></img>
            })}
        </div>
        <div className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork