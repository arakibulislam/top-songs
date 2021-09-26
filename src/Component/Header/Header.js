import React from 'react';
import './Header.css'
import logo from '../../images/logo.jpeg'
const Header = () => {
    return (
        <div className='header'>
            <div  className='row align-items-end header-1'>
            <div className='col-5 text-end' >
                <img className=' image' src={logo} alt="" />
            </div>
            <div className='col-7 text-white'>
                <h1 className='fw-bold'>
                Top 100 Greatest Songs of All Time
                </h1>
                <p>
                    <small>This playlist contains the top 100 greatest songs from the 50s to the 90s.</small>
                </p>
                <p>
                <span className='fw-bold'>Rakibul Islam Akash . </span> <small>16,233 likes . 100 songs</small>
                </p>
            </div>
            </div>
        </div>
    );
};

export default Header;