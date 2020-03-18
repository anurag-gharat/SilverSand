import React from 'react'
import Room from './Room'
export default function RoomsList({rooms}) {
    if(rooms.length===0){
        return(
            <div>
               <h3> Layki nahi tuzi bhadyaaaaa! Nikal Lavde!</h3>
            </div>
        )
    } 
    
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item=>{
                        return(
                            <Room key={item.id} room={item}></Room>
                        )
                    })
                }
            </div>
        </section>
    )
}
