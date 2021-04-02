import axios from 'axios';
import React from 'react';

const ManageProduct = (props) => {
    const {name, price, wight, _id} = props.item;

    const deleteProduct = id => {
        // fetch('https://murmuring-fjord-44706.herokuapp.com/products/deleteProduct/'+ id, {
            
        //     method: 'DELETE',
        // })
        // .then(res => res.json())
        // .then(result => {
        //     console.log('deleted', result)
        // })

    }
    return (
        <div className="all-products-area">
            <table className="table">
                <tbody>
                    <tr>
                    <th scope="row">{name}</th>
                    <td>{wight}</td>
                    <td>{price}</td>
                    <td><button onClick={() => deleteProduct(_id)}>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;