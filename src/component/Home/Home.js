import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4021/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="row">
            {
                products.map(pd => <Product product={pd} key={pd._id}></Product>)
            }
        </div>
    );
};

export default Home;