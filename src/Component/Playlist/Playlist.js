import React from 'react';
import './Playlist.css'

const Playlist = (props) => {
    let totalPrice = 0;
    const songName =[];
    for(const song of props.playlist){
        totalPrice = totalPrice + song.price;
        if(songName.indexOf(song.name)=== -1){
            songName.push(song.name);
        }
    }

    return (
        <div className='text-white playlist'>
            <p>add songs :{props.playlist.length}</p>
            <p>total price : {totalPrice.toFixed(2)}</p>
            {
                songName.map(name => <p>{name}</p>)
            }
        </div>
    );
};

export default Playlist;

