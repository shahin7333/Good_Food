import React from 'react';
import { Link } from 'react-router-dom';
// import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='nav'>
            <nav className='nav-link'>
                <Link to='/home'><b>HOME</b></Link>
                <Link to='/reviews'><b>REVIEWS</b></Link>
                <Link to='/dashboard'><b>DASHBOARD</b></Link>
                <Link to='/blogs'><b>BLOGS</b></Link>
                <Link to='/about'><b>ABOUT</b></Link>
            </nav>
        </div>
    );
};

export default Header;