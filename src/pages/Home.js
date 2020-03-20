import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import FeaturedRooms from '../components/FeaturedRooms'
import Services from '../components/Services'
import StyledHero from "../components/StyledHero"
import About from '../components/About'
export default function Home() {
    return (
        <div>
            <Hero hero="defaultHero">
                <Banner title="Silver Sand" subtitle="Your perfect gateway for weekend!" >
                    <Link to="/rooms" className="btn-primary">Rooms</Link>
                </Banner>
            </Hero>
            <About></About>
            <Services />
            <FeaturedRooms />
        </div>
    )
}
