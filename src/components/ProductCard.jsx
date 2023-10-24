import React, { useState } from 'react';
import '../styles/ProductCard.css';
import { Link } from 'react-router-dom';
import DetailView from './DetailView';

const ProductCard = ({ product }) => {

    return (
        <div className='product-card-div'>
            <img className='product-img' src={product.imgUrl} alt='product' />
            <div className="product-name-div">
                <p className='product-margin'>{product.productName}</p>
            </div>
            <p className='price-margin'>${product.price.toFixed(2)}</p>
            <Link className='link-btn-product' to={`/detail/${product.productId}`}>
                <button className='button-9 buy-btn'>Buy Now </button>
            </Link>
        </div>
    )
}

export default ProductCard