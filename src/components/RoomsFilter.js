import React from 'react'
import {useContext} from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'


const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}


export default function RoomsFilter({rooms}) {
    
    
    const context = useContext(RoomContext)
    const {
        handleChange,type,capacity,price,maxPrice,minPrice,minSize,maxSize,breakfast,pets
    } = context
    let types = getUnique(rooms,'type')
    types=['all',...types];
    let people = getUnique(rooms,'capacity')
    
    return (
        <section className="filter-container">
            <Title title="search rooms" />
                <form className="filter-form">
                    <div className="form-group">
                    <label for="type">Room type </label>
                    <select
                    name="type"
                    id="type"
                    value={type}
                    className="form-control"
                    onChange={handleChange}
                    >
                        {types.map(type=>{
                            return(<option value={type}>{type}</option>)
                        })}

                    </select>
                    </div>
                    
                    <div className="form-group">
                    <label for="capacity">Allowed Guests</label>
                    <select
                    name="capacity"
                    id="capacity"
                    value={capacity}
                    className="form-control"
                    onChange={handleChange}
                    >
                        {people.map(peep=>{
                            return(<option value={peep}>{peep}</option>)
                        })}

                    </select>
                    </div>
                    <div className="form-group">
                        <label for="price">Price:${price}</label>
                        <input type="range" name="price" onChange={handleChange} min={minPrice} max={maxPrice} value={price} id="price" className="form-control"></input> 

                    </div>   
                    <div className="form-group">
                        <label for="size">Room Size</label>
                        <div className="size-inputs">
                            
                        <input className="size-input" id="size" name="minSize" type="number" value={minSize} onChange={handleChange} ></input>
                        <input className="size-input" id="size" name="maxSize" type="number" value={maxSize} onChange={handleChange}></input>
                        </div>
                    
                    </div>
                    <div className="form-control">
                        <div className="single-extra">
                            <input type="checkbox" id="breakfast" name="breakfast" checked={breakfast} onChange={handleChange}></input>
                            <label className="single-extra-label">Breakfast Included</label>
                        </div> 
                        <div className="single-extra">   
                            <input type="checkbox" id="pets" name="pets" checked={pets} onChange={handleChange}></input>
                            <label className="single-extra-label">pets Included</label>
                        </div>
                    </div>   
                </form>
          </section>
    )
}
