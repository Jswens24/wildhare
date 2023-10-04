import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className='product-card-div'>
            <img className='product-img' src={product.imgUrl} alt='product' />
            <div className="product-name-div">
                <h4>{product.productName}</h4>
            </div>
        </div>
    )
}

export default ProductCard