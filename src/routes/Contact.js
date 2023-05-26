import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../footer/Footer'
import Project_Hero_Img from '../components/Project_Hero_Img'

function Contact() {
    return (
        <div>
            <Navbar />
            <Project_Hero_Img heading="CONTACT." text="Lets have a chat." />
            <Footer />
        </div>
    )
}

export default Contact