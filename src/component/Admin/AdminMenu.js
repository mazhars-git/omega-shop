import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <div className="card col-md-4 admin-menu">
            <ul>
                    <li>
                        <Link to="/manageProduct">
                            Manage Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/addProduct">
                            Add Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/editProduct">
                            Edit Product
                        </Link>
                    </li>
            </ul>
        </div>
    );
};

export default AdminMenu;