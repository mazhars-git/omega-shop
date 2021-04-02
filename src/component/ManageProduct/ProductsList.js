import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4021/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="col-8">
            <h1>Delete or remove product</h1>
            {/* <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Wight</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
            </table> */}
                {
                    products.map(pd => <ManageProduct item={pd} key={pd._id}></ManageProduct>) 
                }
            
        </div>
    );
};

export default ProductsList;