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
                    <StyledHero img={images[0]}>
                        <Banner title={`${name} room`}>
                            <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
                        </Banner>
                    </StyledHero>
            </div>
        )
    }
}
