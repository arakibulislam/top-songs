import React from 'react';
import Songs from '../Songs/Songs';
import './Playlist.css'

const Playlist = (props) => {
    let totalPrice = 0;
    const songData = [];
    for (const song of props.playlist) {
        if (songData.indexOf(song) === -1) {
            totalPrice = totalPrice + song.price;
            songData.push(song);
        }
    }

    return (
        <div className=''>
            <div className="my-3 ms-4">
                <div className=" d-flex align-items-end">
                    <i className="fas fa-compact-disc text-white me-2"></i>
                    <h3 className="text-white fw-bold"> Top Songs</h3>
                </div>
                <div className="text-white my-4">
                    <p className="navbar-brand">
                        <i className="fas fa-home me-4"></i>
                        Home
                    </p>
                    <p className="navbar-brand">
                        <i className="fas fa-search me-4"></i>
                        Search
                    </p>
                    <p className="navbar-brand">
                        <i className="fas fa-list-ul me-4"></i>
                        Playlist
                    </p>
                </div>
            </div>
            <div className='text-white playlist'>
                <div className="mt-2 mb-3">
                <div className="bg rounded-3 ms-3 border border-dark mb-4">
                    <h3 className="fs-4 text-white py-2 text-center fw-bold">Songs Add</h3>
                </div>
                    <ol className="list-group list-group-numbered ms-3 ">
                        <li className="list-group-item d-flex justify-content-between align-items-start border border-dark text-white my-1 bg-transparent">
                            <div className="ms-3 me-auto">
                                <div className="fw-bold">Added Songs: </div>
                            </div>
                            <span className="badge bg-danger rounded-pill">{songData.length}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start border border-dark text-white my-1 bg-transparent">
                            <div className="ms-3 me-auto">
                                <div className="fw-bold">Total Cost: </div>
                            </div>
                            <span className="badge bg-danger rounded-pill">$ {totalPrice.toFixed(2)}</span>
                        </li>
                    </ol>
                </div>
                <div>
                <div className="bg rounded-3 ms-3 border border-dark mb-4">
                    <h3 className="fs-4 text-white py-2 text-center fw-bold">Playlist</h3>
                </div>
                </div>
                <div className="my-4 scroll">
                
                    {
                        songData.map(songInfo => <Songs key={songInfo.id} songInfo={songInfo}></Songs>)
                    }
                
                </div>
            </div>
        </div>
    );
};

export default Playlist;

