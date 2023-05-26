import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../footer/Footer'
import Project_Hero_Img from '../components/Project_Hero_Img';

function About() {
    return (
        <div>
            <Navbar />
            <Project_Hero_Img heading="ABOUT." text="I am a friendly Front-End Developer." />
            <Footer />
        </div>
    )
}

export default About;