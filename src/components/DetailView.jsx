import React, { useState } from 'react';
import '../styles/Details.css';
import { Link, useParams } from 'react-router-dom';
import imageArr from '../assets/Data';

const DetailView = () => {
    const params = useParams();

    let product = imageArr[params.id - 1];

    window.scrollTo(0, 0);


    return (
        <div className='button-div'>
            <Link to='/shop'>
                <button className='button-9-detail back'>&#8592; Go Back</button>
            </Link>
            <div className='detail-container'>
                <h2>{product.productName}</h2>
                <img className='detail-img' src={product.imgUrl} alt="product" />
                <div className="price-buy">
                    <h4>${product.price.toFixed(2)}</h4>
                    <a target='_blank' href={product.link}>
                        <button className='button-9-detail buy'>Buy Now</button>
                    </a>
                </div>
                <div className="specs-container">
                    <p> <span className="bold">Condition:</span> {product.condition}</p>
                    <p className='desc'><span className="bold">Description: </span>{product.productDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailView