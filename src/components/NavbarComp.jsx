import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavbarComp.css'

const NavbarComp = () => {
    return (
        <div className='nav-container'>
            <Link to='/'>
                <img className='nav-img' src='src/assets/NavLogo1.png' />
            </Link>
            <div className="links-div">
                <Link className='link-style' to='/'>Home</Link>
                <Link className='link-style' to='/about'>About</Link>
                <Link className='link-style' to='/shop'>Shop</Link>
            </div>
        </div>
    )
}

export default NavbarComp