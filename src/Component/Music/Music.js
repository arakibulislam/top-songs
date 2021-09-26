import React from 'react';
import './Music.css'
const Music = (props) => {
    const { name, singer, duration, image } = props.song;
    return (
        <div className='col-3 my-5 '>
            <div className="card h-100 p-3 music">
                <img src={image} className="card-img-top music-image" alt="..." />
                <div className="card-body text-white">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{singer}</p>
                    <p>{duration}</p>
                    
                </div>
                <dir className='card-footer text-center'>
                <button onClick={()=>props.addToPlaylist(props.song)} className='btn btn-danger'>Add to Playlist</button>
                </dir>
            </div>

        </div>
    );
};

export default Music;