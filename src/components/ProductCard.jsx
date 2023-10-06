import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className='product-card-div'>
            <img className='product-img' src={product.imgUrl} alt='product' />
            <div className="product-name-div">
                <p className='product-margin'>{product.productName}</p>
            </div>
            <p className='price-margin'>${product.price}</p>
        </div>
    )
}

export default ProductCard