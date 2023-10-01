import React, { useRef } from 'react';
import lambSkin from '../assets/productImages/BesttLiebcoLambskin.jpg';
import brushSaver from '../assets/productImages/brushSaver.jpg';
import chevyOwner from '../assets/productImages/ChevyOwnersManual.jpg';
import coaster from '../assets/productImages/Coaster.jpg';
import doorLever from '../assets/productImages/doorLevers.jpg';
import greatLakesMag from '../assets/productImages/greatLakesMag.jpg';
import hardMaple from '../assets/productImages/HardMaple.jpg';
import mylarLens from '../assets/productImages/MylarLensProtector.jpg';
import swensOil from '../assets/productImages/oil.png';
import placeMats from '../assets/productImages/PlaceMats.jpg';
import scienceIllistrated from '../assets/productImages/Scienceillistrated.jpg';
import shelterBook from '../assets/productImages/ShelterBook.jpg';
import woosterPaint from '../assets/productImages/WoosterPaintRollerCover.jpg';


import '../styles/Shop.css'

const Shop = ({ shopRef }) => {
    const imageArr = [
        {
            productId: 1,
            productName: 'Bestt Liebco Lambskin Stain Applicator Pad',
            imgUrl: lambSkin,
            price: 18.75
        },


    ]

    return (
        <div ref={shopRef}>
            {imageArr.map(product => {
                return (
                    <div>
                        <img className='product-img' src={product.imgUrl} alt='product' />
                        <h4>{product.productName}</h4>
                    </div>
                )
            })}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus doloribus accusantium, corrupti reprehenderit laudantium nisi ipsam debitis assumenda, ex, sequi ipsum eveniet! Fugiat cum non eum eos, dolor unde!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus doloribus accusantium, corrupti reprehenderit laudantium nisi ipsam debitis assumenda, ex, sequi ipsum eveniet! Fugiat cum non eum eos, dolor unde!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus doloribus accusantium, corrupti reprehenderit laudantium nisi ipsam debitis assumenda, ex, sequi ipsum eveniet! Fugiat cum non eum eos, dolor unde!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus doloribus accusantium, corrupti reprehenderit laudantium nisi ipsam debitis assumenda, ex, sequi ipsum eveniet! Fugiat cum non eum eos, dolor unde!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus doloribus accusantium, corrupti reprehenderit laudantium nisi ipsam debitis assumenda, ex, sequi ipsum eveniet! Fugiat cum non eum eos, dolor unde!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus doloribus accusantium, corrupti reprehenderit laudantium nisi ipsam debitis assumenda, ex, sequi ipsum eveniet! Fugiat cum non eum eos, dolor unde!</p>
        </div>
    )
}

export default Shop