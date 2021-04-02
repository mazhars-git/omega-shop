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
        <div className="container admin-area">
            <div className="row">
                <Router>
                    <AdminMenu />
                    <Switch>
                        <Route path="/addProduct">
                            <AddProduct />
                        </Route>
                        <Route path="/manageProduct">
                            <ProductsList />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
};

export default Admin;