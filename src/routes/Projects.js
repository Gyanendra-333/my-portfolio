import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../footer/Footer';
import Project_Hero_Img from '../components/Project_Hero_Img';
import Project_Card from '../components/project_card/Project_Card';
import Work_Card from '../components/project_card/Work_Card';


function Projects() {
    return (
        <div>
            <Navbar />
            <Project_Hero_Img heading="PROJECTS." text="There Are Some Projects of me." />
            <Work_Card />
            <Project_Card />
            <Footer />
        </div>
    );
}

export default Projects;