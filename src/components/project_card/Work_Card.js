import { NavLink } from "react-router-dom";
import "./Work_Card.css";
import React from 'react';
// import pro1 from '../images/img_05.jpg';

function Work_Card() {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                <div className="project-card">

                    {/* <img src={pro1} alt="img" /> */}

                    <img src="https://cdn.pixabay.com/photo/2018/05/16/18/08/e-commerce-3406613_1280.jpg" alt="img" />
                    <h2 className="project-title">Project Title</h2>
                    <div className="pro-details">
                        <p>Ecommerce is a method of buying and selling goods and services online. The definition of ecommerce business can also include tactics like affiliate marketing.</p>
                        <div className="pro-btns">
                            <NavLink to="https://www.google.com/" className="btn">View</NavLink>
                            <NavLink to="https://www.google.com/" className="btn">Source</NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Work_Card;