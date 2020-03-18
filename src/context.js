import React, { Component } from 'react'

import Client from './Contentful'


const RoomContext = React.createContext();

class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:"all",
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    }
    //getdata
getData = async()=>{
    try{
        let response = await Client.getEntries({
            content_type:"beachResortRoom",
            order:"sys.createdAt"
        })
        console.log(response.items)
        let rooms=this.formatData(response.items)
        let featuredRooms = rooms.filter(room=>room.featured===true)
        let maxPrice=Math.max(...rooms.map(item=>item.price))
        let maxSize=Math.max(...rooms.map(item=>item.size))
       
        this.setState({
            rooms,
            sortedRooms:rooms,
            featuredRooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize
        })
    }
    catch(err){
        console.log(err)
    }
}








    componentDidMount(){
        this.getData()
    
    }
    formatData=(items)=>
    {
        let tempItems=items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image=>image.fields.file.url)
            let room ={...item.fields,images,id}
            return room;
        })
        return tempItems;
    }
    getRoom=(slug)=>{
        let tempRooms=[...this.state.rooms]
        const room= tempRooms.find(room=>room.slug===slug);
        return room;
    }
    handleChange=(event)=>{
        console.log("working")

        const target = event.target
        const value = target.type === 'checkbox' ? target.checked :target.value
        const name = event.target.name;
        this.setState({
            [name]:value
        },
       this.filterRooms)
        
    }
    filterRooms=()=>{
        let {rooms,type,capacity,price,maxPrice,minPrice,minSize,maxSize,breakfast,pets}=this.state
        let temprooms =[...rooms];
        capacity=parseInt(capacity)
        price=parseInt(price)
        //filtered by tyoe
        if (type!=='all'){
            temprooms=temprooms.filter(room=>room.type===type)
        }
        if(capacity!==1){
            temprooms=temprooms.filter(room=>room.capacity>=capacity)
        }
        if(price!==600){
            temprooms=temprooms.filter(room=>room.price<=price  )
        }

        temprooms=temprooms.filter(room=>room.size>=minSize&&room.size<=maxSize)
        
        if(breakfast){
            temprooms=temprooms.filter(room=>room.breakfast===true)
        }
        if(pets){
            temprooms=temprooms.filter(room=>room.pets===true)
        }
        this.setState({
            sortedRooms:temprooms
        })
    
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer , RoomContext };