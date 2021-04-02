import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';


const Product = (props) => {
    const {name, price, wight, imageURL, _id} = props.product;
    return (
        <div className="card col-md-3 product-item">
            <img src={imageURL} alt=""/>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <Link to={`/product/${_id}`}>
                <button className="btn btn-primary">Buy Now</button>
            </Link>
        </div>
    );
};

export default Product;