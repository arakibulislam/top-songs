import React from 'react';
import Rating from 'react-rating';
import './Music.css'
const Music = (props) => {
    const { name, singer, duration, image, album, rating, price } = props.song;
    return (
        <div className='col-6 col-lg-4 my-3 '>
            <div className="card mb-3 music  h-100">
                <div className="row g-0 align-items-start pt-2">
                    <div className="col-md-4 p-3">
                        <img src={image} className="music-image " alt="..." />
                        <p className="text-white text-center pt-2"><b>Cost :</b> ${price}</p>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-white">
                            <h4 className="card-title fw-bold"> {name}</h4>
                            <p className="card-text text-danger fw-bold fs-5">{singer}</p>
                            <p className="card-text"><small><b>Album :</b> {album}</small></p>
                            <p className="card-text">Duration : <small className="text-muted">{duration}</small></p>
                            <p className="card-text"> Rating : <Rating initialRating={rating.rate} readonly emptySymbol="far fa-star"
                                fullSymbol="fa fa-star"
                            /> </p>
                            <button onClick={() => props.addToPlaylist(props.song)} className='btn btn-danger'><small><i className="fas fa-music me-2"></i>Add to Playlist</small></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Music;