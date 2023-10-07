import React from 'react';
import '../styles/ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const clickToDetailView = (e) => {

    }

    return (
        <div className='product-card-div'>
            <img className='product-img' src={product.imgUrl} alt='product' />
            <div className="product-name-div">
                <p className='product-margin'>{product.productName}</p>
            </div>
            <p className='price-margin'>${product.price}</p>
            <Link className='button-9 buy-btn' to={`/detail/${product.productId}`}>Buy Now </Link>
        </div>
    )
}

export default ProductCard