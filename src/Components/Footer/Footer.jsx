import React from 'react';
import "./Footer.css";
import footer_logo from "../../assets/theme_pattern.png";
import user_icon from "../../assets/user_icon.svg";

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img style={{width:"100px"}} src={footer_logo} alt="" />
                <p>I'm a software engineering student at Haliç University. I have two years of experience in the software field.</p>
            </div>
            <div className='footer-top-right'>
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2025 Mehmet Eren Çakmak. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer