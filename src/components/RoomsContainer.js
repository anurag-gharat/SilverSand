import React from 'react'
import {Link} from 'react-router-dom'
import RoomsFilter from  './RoomsFilter'
import RoomsList from  './RoomsList'
import {RoomConsumer} from '../context'
import Loading from './Loading'


export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {
                value=>{
                    
                    
                const {loading,sortedRooms,rooms}=value;
                if(loading){
                    return(<Loading></Loading>)
                }
                else{
                    return(
                        <div>
                            <RoomsFilter rooms={rooms}></RoomsFilter>
                            <RoomsList rooms={sortedRooms}></RoomsList>
                        </div>
                    ) 
                }
                 
                    
                }
            }
        </RoomConsumer>

        

    )
}
