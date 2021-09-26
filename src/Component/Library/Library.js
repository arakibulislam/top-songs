import React, { useEffect, useState } from 'react';
import Music from '../Music/Music';
import Playlist from '../Playlist/Playlist';
import './Library.css'

const Library = () => {
    const [music, setMusic] = useState([])
    const [playlist, setPlaylist] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setMusic(data))
    }, [])
    const addToPlaylist = music =>{
        const newPlaylist = [...playlist, music]
        setPlaylist(newPlaylist);
    }

    return (
        <div className='library'>
            <div className='w-50 mx-auto text-white pt-4'>
                <h1>Total Songs: {music.length}</h1>
            </div>
            <div className='row ps-5'>
                <div className='library-1 col-2'>
                <Playlist playlist={playlist}></Playlist>
                </div>
                <div className='row col-10 '>
                    {
                        music.map(song => <Music song={song} addToPlaylist = {addToPlaylist} ></Music>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Library;