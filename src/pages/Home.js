import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import FeaturedRooms from '../components/FeaturedRooms'
import Services from '../components/Services'


export default function Home() {
    return (
        <div>
            <Hero hero="defaultHero">
                <Banner title="luxurious Rooms" subtitle="Deluxe rooms at good price" >
                    <Link to="/rooms" className="btn-primary">Rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </div>
    )
}
