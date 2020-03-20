import React from 'react'
import Title from './Title'
import image from '../images/defaultBcg.jpg'
import logo from '../images/logo.png'
export default function About() {
    return (
        <section className="about-section">
            <Title title={"About Us"}/>
            <div className="about">
                <div className="col-4">
                    <img src={logo}></img>
                    <p>The Silver Sand is your luxury bohemian hideaway in the Alibag. A highly personalised, immensely private luxury resort in Alibag with 26 beach and ocean houses where every experience is tailored to you.</p>
                    
                </div>
                <div className="col-8">
                    <img src={image}></img>
                </div>
            </div>
        </section>
    )
}
