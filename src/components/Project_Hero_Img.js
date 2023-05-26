import "./Project_Hero_Img.css";
import React, { Component } from 'react';

class Project_Hero_Img extends Component {
    render() {
        return (
            <div className='hero-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div >
        );
    }
}

export default Project_Hero_Img;