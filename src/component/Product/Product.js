import React from 'react';
import './Product.css';


const Product = (props) => {
    const {name, price, wight, imageURL} = props.product;
    return (
        <div className="card col-md-3 product-item">
            <img src={imageURL} alt=""/>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button className="btn btn-primary">Order</button>
        </div>
    );
};

export default Product;