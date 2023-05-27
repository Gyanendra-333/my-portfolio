import React from 'react';
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import Footer from '../footer/Footer';
import Work_Card from '../components/project_card/Work_Card';

function Home() {
    return (
        <div>
            <Navbar />
            <HeroImage />
            <Work_Card />
            <Footer />
        </div>
    );
}

export default Home;