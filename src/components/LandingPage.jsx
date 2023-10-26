import React from 'react';
import '../styles/LandingPage.css';
import Shop from './Shop';
import About from './About';
import { Link } from 'react-router-dom';
import oilImg from '../assets/productImages/OilBottle1.png'

const LandingPage = ({ landingRef, shopRef, aboutRef }) => {

    const handleScroll = (ref) => {
        window.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };


    return (

        <div className='landing-top-div'>
            <div ref={landingRef} className='landing-banner'>
                <div className='blue-block'></div>
                <img className='landing-img' src={oilImg} alt="oil" />
                <div className='landing-content'>
                    <h4>Featuring: Swen's Swedish Oil</h4>
                    <h1>BROWSE OUR PREMIUM PRODUCTS</h1>
                    <p>Discover a diverse collection of high-quality items meticulously curated for your satisfaction. From home decor to vintage magazines, our eBay store offers top-notch products that cater to every taste and need.</p>
                    <Link className='landing-link' to={'/shop'}>
                        <button onClick={() => { handleScroll(shopRef.current) }} className='button-browse' href="/shop">Browse Now</button>
                    </Link>
                </div>
            </div>
            <Shop />
            <About />
        </div>
    )
}

export default LandingPage