import React from 'react';
import "./HeroImage.css";
import IntroImg from "../images/img_02.jpg";
import { Link } from 'react-router-dom';

function HeroImage() {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='into-img' src={IntroImg} alt='IntroImg' />
            </div>

            <div className='content'>
                <p>Hello, I am Gyanendra Prakash.</p>
                <h1>Front-End Developer.</h1>
                <div >
                    <Link to="/project" className='btn'>Projects</Link>
                    <Link to="/contact" className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>

    );
}

export default HeroImage;