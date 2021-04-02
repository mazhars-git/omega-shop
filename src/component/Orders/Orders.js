import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrdersDetails from './OrdersDetails';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://murmuring-fjord-44706.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <div className="container">
            <h3>Hey! {loggedInUser.name}! you have {orders.length} orders:</h3>
                {
                    orders.map(item => <OrdersDetails product={item} key={item._id}></OrdersDetails>)
                }
            </div>
    );
};

export default Orders;