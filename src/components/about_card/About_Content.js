import { Link } from "react-router-dom";
import "./About_Content.css";
import React from 'react';


function About_Content() {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I ?</h1>
                <p> I Am a Front-End Developer. I Create Responsive Secure Websites.</p>

                <Link to="/contact"><button className="btn">Contact</button></Link>

            </div>
            <div className="right">
                <div className="img-container">
                    <div className="top">
                        <img src="https://images.pexels.com/photos/3380736/pexels-photo-3380736.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="img" alt="true" />
                    </div>
                    <div className="bottom">
                        <img src="https://images.pexels.com/photos/688668/pexels-photo-688668.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About_Content;