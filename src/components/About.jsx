import React from 'react';
import '../styles/About.css'

const About = ({ aboutRef }) => {
    return (
        <div className='about-container' ref={aboutRef}>
            <h3 className='about-heading'> Meet Wildhare aka Robert </h3>
            <div className='about-div'>
                <img className='headshot' src='src/assets/RobertHeadshot.png' alt='head shot' />
                <div className='bio-div'>
                    <h3>Bringing Excellence to Every Surface</h3>

                    <p>Step into the world of ecommerce where precision meets passion, and where quality craftsmanship takes center stage. Here, we proudly introduce Robert, the virtuoso behind his collection of top-tier items.</p>

                    <h3>The Portrait of Robert</h3>

                    <h5>Mastering the Canvas of Commercial Construction</h5>

                    <p>Meet Robert, a relentless painter with a vision that goes beyond the ordinary. From the early days of his career, Robert's dedication to the art of commercial construction painting has been nothing short of exceptional. His journey, marked by perseverance and excellence, has transformed him into an industry luminary.</p>

                    <h3>The Art of Precision</h3>

                    <h5>Where Every Stroke is a Testament to Excellence</h5>

                    <p>In the world of commercial construction, precision is paramount. Robert's commitment to perfection is evident in every project he undertakes. With an eye for detail and a passion for quality, he has established himself as a maestro in the realm of transforming buildings into masterpieces.</p>
                </div>
            </div>
            <div className='about-div'>
                <div className="bio-div-bottom">

                    <h3>From Walls to Ecommerce</h3>

                    <h5>Bringing Expertise to the Digital Marketplace</h5>

                    <p>As the digital landscape evolved, Robert recognized the need to extend his expertise beyond physical walls. This realization led to the birth of our ecommerce platform, where Robert meticulously curates a range of high-quality products. Each product embodies his dedication to excellence.</p>

                    <h3>Dedication Beyond Measure</h3>

                    <h5>Elevating the Standards of Construction Painting</h5>

                    <p>Robert's journey from a dedicated painter to an ecommerce entrepreneur is a testament to his relentless work ethic. He has poured his heart and soul into selecting and creating each item in our collection, ensuring that only the finest solutions find their place in our digital catalog. His commitment to delivering top-tier quality sets the gold standard in commercial construction painting.</p>

                    <h3>Experience Robert's Vision</h3>

                    <p>At our ecommerce platform, you'll find more than just products; you'll discover Robert's unwavering dedication to excellence. His passion for precision, craftsmanship, and quality is woven into every item we offer. Join us in celebrating Robert's vision and products he has carefully curated for you.</p>

                    <p>Experience the precision. Embrace the quality. Trust in Robert's expertise.</p>
                </div>
                <img className='headshot' src='src/assets/G&G.png' alt='g & g' />
            </div>
        </div>
    )
}

export default About