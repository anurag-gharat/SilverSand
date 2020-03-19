import React from 'react'
import LoadingGif from '../images/gif/loading-arrow.gif'
export default function Loading() {
    return (
        <div className="loading">
            <h4>Rooms are being loaded.Please wait.</h4>
            <img src={LoadingGif} alt="Loading"></img>
        </div>
    )
}
