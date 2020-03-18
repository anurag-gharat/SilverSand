import React, { Component } from 'react'
import Hero from '../components/Hero'
import defaultBCG from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {

    constructor(props){
        super(props)
        this.state={
            slug:this.props.match.params.slug,
            defaultBCG
        };
    
    }
    static contextType=RoomContext;

    render() {    

        const {getRoom}=this.context
        const room=getRoom(this.state.slug)
        if(!room){
            return<div className="error">
                <h3>No such page can be found</h3>
                <Link to="/rooms" className="btn-primary">Back To Rooms</Link>
            </div>
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images}=room;
        return (
            <div>
                    <StyledHero img={images[0] || this.state.defaultBCG}>
                        <Banner title={`${name} room`}>
                            <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
                        </Banner>
                    </StyledHero>
                    <section class="single-room">
                        <div className="single-room-images">
                            {images.map((item,index)=>{
                                return(<img src={item} key={index}></img>)
                            
                            })}
                        </div>
                        <div className="single-room-info">
                            <article className="desc">
                                <h3>Details</h3>
                                <p>{description}</p>
                            </article>
                            <article className="info">
                                <h3>info</h3>
                                <h6>Price:{price}</h6>
                                <h6>Size:{size}SQFT</h6>
                                <h6>Max Capacity:{capacity>1?`${capacity} People`:`${capacity} Person`}</h6>
                                <h6>{pets ? "Pets are Allowed":"Pets are not Allowed"}</h6>
                                <h6>{breakfast && "Free Breakfast Included"}</h6>
                            </article>
                        </div>
                    </section>
                    <section className="room-extras">
                        <h6>Extras</h6>
                        <ul className="extras">
                            {extras.map((extra,index)=>{
                                return(<li key={index}>{extra}</li>)
                            })}
                        </ul>
                    </section>
            </div>
        )
    }
}
