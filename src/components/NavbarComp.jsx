import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavbarComp.css'

const NavbarComp = ({ shopRef, aboutRef, landingRef }) => {

    const handleScroll = (ref) => {
        window.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };


    return (
        <div className='nav-container'>
            <Link onClick={() => { handleScroll(landingRef.current) }} to='/'>
                <img className='nav-img' src='src/assets/NavLogo1.png' />
            </Link>
            <div className="links-div">
                <Link onClick={() => { handleScroll(landingRef.current) }} className='link-style'>Home</Link>
                <Link className='link-style' onClick={() => { handleScroll(shopRef.current) }}>Shop</Link>
                <Link onClick={() => { handleScroll(aboutRef.current) }} className='link-style'>About</Link>
            </div>
        </div>
    )
}

export default NavbarComp