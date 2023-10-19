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
import warnerScraper from '../assets/productImages/WarnerScraper.jpg';
import '../styles/Shop.css'
import ProductCard from './ProductCard';

const Shop = ({ shopRef }) => {
    const imageArr = [
        {
            productId: 1,
            productName: 'Bestt Liebco Lambskin Stain Applicator Pad',
            imgUrl: lambSkin,
            price: 18.75
        },
        {
            productId: 2,
            productName: 'Brush Saver Wet Brush Storage System',
            imgUrl: brushSaver,
            price: 18.75
        },
        {
            productId: 3,
            productName: '1963 Chevrolet Owners Guide',
            imgUrl: chevyOwner,
            price: 16.75
        },
        {
            productId: 4,
            productName: 'Set of 4 Sisal Drink Coasters',
            imgUrl: coaster,
            price: 9.95
        },
        {
            productId: 5,
            productName: 'Door Levers & Hinges',
            imgUrl: doorLever,
            price: 35.75
        },
        {
            productId: 8,
            productName: 'Great Lakes Technocrat',
            imgUrl: greatLakesMag,
            price: 16.50
        },
        {
            productId: 9,
            productName: 'Pair of Hard Maple',
            imgUrl: hardMaple,
            price: 8.75
        },
        {
            productId: 10,
            productName: '65 Mylar Lens Protectors',
            imgUrl: mylarLens,
            price: 39.75
        },
        {
            productId: 11,
            productName: "Swen's Swedish Oil",
            imgUrl: swensOil,
            price: 19.95
        },
        {
            productId: 12,
            productName: 'Set of 4 Sisal Place Mats',
            imgUrl: placeMats,
            price: 18.80
        },
        {
            productId: 13,
            productName: 'Science Illustrated',
            imgUrl: scienceIllistrated,
            price: 16.95
        },
        {
            productId: 14,
            productName: 'The Shelter Hoax & Foreign Policy',
            imgUrl: shelterBook,
            price: 19.95
        },
        {
            productId: 15,
            productName: 'Wooster Paint Roller',
            imgUrl: woosterPaint,
            price: 18.75
        },
        {
            productId: 16,
            productName: 'Warner Scraper Replacement Blades',
            imgUrl: warnerScraper,
            price: 14.95
        },
    ]

    return (
        <div className='shop-container' ref={shopRef}>
            {imageArr.map(product => {
                return <ProductCard key={product.productId} product={product} />
            })}

        </div>
    )
}

export default Shop