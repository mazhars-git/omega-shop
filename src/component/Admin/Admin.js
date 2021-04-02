import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AddProduct from './AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import ProductsList from '../ManageProduct/ProductsList';
import AdminMenu from './AdminMenu';

const Admin = () => {
    return (
        <div className="row">
                <Router>
                    <AdminMenu></AdminMenu>
                    <Switch>
                        <Route path="/addProduct">
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path="/manageProduct">
                            <ProductsList></ProductsList>
                        </Route>
                    </Switch>
                </Router>
        </div>
    );
};

export default Admin;