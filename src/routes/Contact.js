import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../footer/Footer'
import Project_Hero_Img from '../components/Project_Hero_Img'
import Form from '../components/contact_card/Form'

function Contact() {
    return (
        <div>
            <Navbar />
            <Project_Hero_Img heading="CONTACT." text="Lets have a chat." />
            <Form />
            <Footer />
        </div>
    )
}

export default Contact;