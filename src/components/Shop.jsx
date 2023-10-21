import React, { useRef } from 'react';
import imageArr from '../assets/Data';
import '../styles/Shop.css'
import ProductCard from './ProductCard';

const Shop = ({ shopRef }) => {


    return (
        <div className='shop-container' ref={shopRef}>
            {imageArr.map(product => {
                return <ProductCard key={product.productId} product={product} />
            })}

        </div>
    )
}

export default Shop