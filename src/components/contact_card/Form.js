import "./Form.css";

import React from 'react'

function Form() {
    return (
        <div className="form">
            <form>
                <label>Your Name</label>
                <input type="text" placeholder=" Enter Name"></input>

                <label>Your Email</label>
                <input type="email" placeholder=" Enter Email"></input>

                <label>Subject</label>
                <input type="text" placeholder=" Enter Subject"></input>

                <label>Message</label>
                <textarea rows="7" placeholder=" Type Your Message here..." />
                <button className="btn">Submit - Message</button>
            </form>
        </div>
    );
}

export default Form;