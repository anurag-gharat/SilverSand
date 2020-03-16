import React, { Component } from 'react'
import Title from './Title'
import {FaBeer,FaHiking,FaCocktail,FaShuttleVan} from 'react-icons/fa'
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Cocktails every evening.",
                Description:"LorLoremepsium askmdaslkdmaskldmasldkmlk",
            },
            
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                Description:"Loremepsium tekldmasldkmlk",
            },
            
            {
                icon:<FaShuttleVan/>,
                title:"Free Bus Service",
                Description:"LoreLoremepsium kmdaslkdmaskldmasldkmlk",
            },
            
            {
                icon:<FaBeer/>,
                title:"Free Beer",
                Description:"Loremepsium textetaskldmasldkmlk",
            },
        ]
    }
    
    render() {

        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                    {this.state.services.map((service)=>{
                        return(
                        <article className="service" key={service.title}>
                        <span>{service.icon}</span>
                        <h6>{service.title}</h6>
                        <p>{service.Description}</p>
                        </article>)
                        })}
                </div>
            </section>
                
        )
    }
}
