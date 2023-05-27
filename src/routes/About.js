import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../footer/Footer'
import Project_Hero_Img from '../components/Project_Hero_Img';
import About_Content from '../components/about_card/About_Content';

function About() {
    return (
        <div>
            <Navbar />
            <Project_Hero_Img heading="ABOUT." text="I am a friendly Front-End Developer." />
            <About_Content />
            <Footer />
        </div>
    )
}

export default About;