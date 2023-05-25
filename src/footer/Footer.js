import "./Footer.css";
import React from 'react';
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">

                        <FaHome size={20} style={{ color: "aliceblue", marginRight: "2rem" }} />
                        <div>
                            <p>Tilhar, Shahjahanpur</p>
                            <p>Uttar Pradesh, India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "aliceblue", marginRight: "2rem" }} /> +91-7355161229</h4>
                    </div>


                    <div className="mail">
                        <h4><FaMailBulk size={20} style={{ color: "aliceblue", marginRight: "2rem" }} />pgyanendra333@gmail.com</h4>
                    </div>

                    {/* </div> */}
                </div>
                <div className="right">
                    <h4 >About us</h4>
                    <p>This is me Gyanendra Prakash. I am a front-End Developer. </p>
                    <p>I have Skills HTML5, CSS3, JavaScript, Bootstarp And React Js</p>

                    <div className="social">
                        < FaFacebook size={30} style={{ color: "aliceblue", marginRight: "1rem" }} />

                        < FaTwitter size={30} style={{ color: "aliceblue", marginRight: "1rem" }} />

                        < FaLinkedin size={30} style={{ color: "aliceblue", marginRight: "1rem" }} />

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;