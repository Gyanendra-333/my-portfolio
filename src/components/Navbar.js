import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!false);

    return (
        <div className='header'>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>

            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/project">Project</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className='hamburger'>

                <FaTimes size={20} style={{ color: "aliceblue" }} />
                <FaBars size={20} style={{ color: "aliceblue" }} />

            </div>

        </div>
    );
}

export default Navbar