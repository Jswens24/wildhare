import React, { useState } from 'react';
import '../styles/ProductCard.css';
import { Link } from 'react-router-dom';
import DetailView from './DetailView';

const ProductCard = ({ product }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='product-card-div'>
            <img className='product-img' src={product.imgUrl} alt='product' />
            <div className="product-name-div">
                <p className='product-margin'>{product.productName}</p>
            </div>
            <p className='price-margin'>${product.price}</p>
            <button className='button-9 buy-btn'>Buy Now </button>
        </div>
    )
}

export default ProductCard