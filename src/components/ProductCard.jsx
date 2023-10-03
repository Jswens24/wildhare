import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className='product-card-div'>
            <img className='product-img' src={product.imgUrl} alt='product' />
            <h4>{product.productName}</h4>
        </div>
    )
}

export default ProductCard