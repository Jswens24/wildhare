import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavbarComp.css'
import navImg from '../assets/NavLogo1.png';

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
            <Link to={'/'} onClick={() => { handleScroll(landingRef.current) }}>
                <img className='nav-img' src={navImg} />
            </Link>
            <div className="links-div">
                <Link to={'/'} onClick={() => { handleScroll(landingRef.current) }} className='link-style'>Home</Link>
                <Link to={'/shop'} className='link-style-padding link-style' onClick={() => { handleScroll(shopRef.current) }}>Shop</Link >
                <Link to={'/about'} onClick={() => { handleScroll(aboutRef.current) }} className='link-style-padding link-style'>About</Link>
            </div>
        </div>
    )
}

export default NavbarComp