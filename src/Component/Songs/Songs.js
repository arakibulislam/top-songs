import React from 'react';
import './Songs.css'
const Songs = (props) => {
    const { image, name, duration } = props.songInfo;
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent ms-3 border border-dark text-white my-1">
            <img className="rounded-3" src={image} alt="" width="50px" />
            <div className="ms-2 me-auto">
                <div className="fw-bold">{name}</div>
                <small>{duration}</small>
            </div>
            <button className="btn btn-outline-danger "><small><i className="fas fa-play"></i></small></button>
        </li>
    );
};

export default Songs;