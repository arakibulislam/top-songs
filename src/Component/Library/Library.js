import React, { useEffect, useState } from 'react';
import Music from '../Music/Music';
import Playlist from '../Playlist/Playlist';
import './Library.css'

const Library = () => {
    const [music, setMusic] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setMusic(data))
    }, [])

    const [playlist, setPlaylist] = useState([])
    const addToPlaylist = music =>{
        const newPlaylist = [...playlist, music]
        setPlaylist(newPlaylist);
    }

    return (
        <div className='library'>
            <div className='w-50 ms-auto text-white py-5'>
                <h1 className="fw-bold"><i className="fas fa-play-circle me-3"></i>Total Songs : {music.length}</h1>
            </div>
            <div className='row ps-5'>
                <div className='library-1 col-3'>
                <Playlist playlist={playlist}></Playlist>
                </div>
                <div className='row col-9 '>
                    {
                        music.map(song => <Music key = {song.id} song={song} addToPlaylist = {addToPlaylist} ></Music>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Library;