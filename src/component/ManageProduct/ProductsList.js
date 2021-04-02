import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';
import '.././Admin/Admin.css';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-fjord-44706.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="col-md-8">
            <h3 className="text-center">All products</h3>
                {
                    products.map(pd => <ManageProduct item={pd} key={pd._id}></ManageProduct>) 
                }
            
        </div>
    );
};

export default ProductsList;