import React from 'react';
import { Table } from 'react-bootstrap';

const OrdersDetails = (props) => {
    const {name, orderTime, price} = props.product;
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Description</th>
                    <th>Order Time</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{name}</td>
                    <td>{(new Date(orderTime)).toDateString('dd/MM/YYYY')}</td>
                    <td>Tk: {price}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default OrdersDetails;