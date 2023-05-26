import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../footer/Footer';
import Project_Hero_Img from '../components/Project_Hero_Img';


function Projects() {
    return (
        <div>
            <Navbar />
            <Project_Hero_Img heading="PROJECTS." text="There Are Some Projects of me." />
            <Footer />
        </div>
    );
}

export default Projects;