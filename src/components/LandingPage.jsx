import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
    return (
        <div className='landing-banner'>
            <div className='blue-block'></div>
            <img className='landing-img' src="src/assets/OilBottle1.png" alt="oil" />
            <div className='landing-content'>
                <h4>Swen's Swedish Oil</h4>
                <h1>BROWSE OUR PREMIUM PRODUCTS</h1>
                <p>Discover a diverse collection of high-quality items meticulously curated for your satisfaction. From home decor to vintage magazines, our eBay store offers top-notch products that cater to every taste and need.</p>
                <button className='button-9' href="/shop">Browse Now</button>
            </div>
        </div>
    )
}

export default LandingPage