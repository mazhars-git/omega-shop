import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();

    const [item, setItem] = useState({});
    useEffect(() => {
        fetch('http://localhost:4021/product/'+ id)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [id])
    console.log(item)

    const handleCheckOut = () => {
        const orderDetails = {...loggedInUser, ...item, orderTime: new Date()};

        fetch('http://localhost:4021/addOrder', {

            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Place Order Successfully');
            }
        })
    }
    return (
        <div className="container">
            <h2>CheckOut Page</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{item.name}</td>
                    <td>1</td>
                    <td>Tk: {item.price}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                    <td>Total</td>
                    <td>{item.length}</td>
                    <td>Tk: {item.price}</td>
                    </tr>
                </tbody>
            </Table>
            <button className="btn btn-success text-right" onClick={handleCheckOut}>ChechOut</button>
        </div>
    );
};

export default CheckOut;