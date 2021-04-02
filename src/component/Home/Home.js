import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-fjord-44706.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="container">
            <div className="row all-product">
                {
                    products.length === 0 && 
                    <div class="text-center text-success m-5">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden"></span>
                        </div>
                    </div>
                }
                {
                    products.map(pd => <Product product={pd} key={pd._id}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;