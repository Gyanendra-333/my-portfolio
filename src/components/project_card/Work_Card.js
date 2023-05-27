import { NavLink } from "react-router-dom";
import "./Work_Card.css";
import React from 'react';
// import pro1 from '../images/img_05.jpg';

function Work_Card() {
    return (
        <div className="project-card">
            {/* <img src={pro1} alt="img" /> */}

            <img src="https://img.freepik.com/premium-vector/3d-online-shopping-social-media-mobile-applications-websites-concepts_131114-30.jpg?w=996" alt="img" />
            <h2 className="project-title">Project Title</h2>
            <div className="pro-details">
                <p>Ecommerce is a method of buying and selling goods and services online. The definition of ecommerce business can also include tactics like affiliate marketing.</p>
                <div className="pro-btns">
                    <NavLink to="https://www.google.com/" className="btn">View</NavLink>
                    <NavLink to="https://www.google.com/" className="btn">Source</NavLink>
                </div>
            </div>
        </div>
    );
}
export default Work_Card;